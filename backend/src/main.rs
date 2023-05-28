mod config;
mod handler;
mod schemas;

// add
use async_graphql::{http::GraphiQLSource, EmptySubscription, Schema};
use async_graphql_rocket::{GraphQLQuery, GraphQLRequest, GraphQLResponse};
use config::mongo::DBMongo;
use handler::graphql_handler::{Mutation, ProjectSchema, Query};
use rocket::{response::content, routes, State};

#[rocket::get("/api?<query..>")]
async fn graphql_query(schema: &State<ProjectSchema>, query: GraphQLQuery) -> GraphQLResponse {
    query.execute(schema.inner()).await
}

#[rocket::post("/api", data = "<request>", format = "application/json")]
async fn graphql_mutation(
    schema: &State<ProjectSchema>,
    request: GraphQLRequest,
) -> GraphQLResponse {
    request.execute(schema.inner()).await
}

#[rocket::get("/")]
async fn graphiql_playground() -> content::RawHtml<String> {
    content::RawHtml(GraphiQLSource::build().endpoint("/api").finish())
}

#[rocket::launch]
fn rochet() -> _ {
    let db = DBMongo::init();
    let schema = Schema::build(Query, Mutation, EmptySubscription)
        .data(db)
        .finish();
    rocket::build().manage(schema).mount(
        "/",
        routes![graphql_query, graphql_mutation, graphiql_playground],
    )
}
