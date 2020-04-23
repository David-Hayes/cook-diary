import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
})

exports.handler = (event, context, callback) => {
  return client
    .query(q.Create(q.Collection('cooks'), { data: { test: 1 } }))
    .then((response) => {
      return {
        statusCode: 200,
        body: JSON.stringify({ success: true }),
      }
    })
    .catch((error) => {
      return {
        statusCode: 400,
        body: JSON.stringify({ success: false, error: error }),
      }
    })
}
