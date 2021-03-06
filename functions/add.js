import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
})

exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body)
  return client
    .query(q.Create(q.Collection('cooks'), { data: data }))
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
