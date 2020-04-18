import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET
});

exports.handler = (event, context, callback) => {
  console.log("Function `getAll` invoked")
  return client.query(q.Paginate(q.Match(q.Ref("indexes/all_cooks"))))
    .then((response) => {
      const cooksRefs = response.data
      console.log("Cooks refs", cooksRefs)
      console.log(`${cooksRefs.length} cooks found`)
      const getAllCooksDataQuery = cooksRefs.map((ref) => {
        return q.Get(ref)
      })
      // then query the refs
      return client.query(getAllCooksDataQuery).then((ret) => {
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(ret)
        })
      })
    }).catch((error) => {
      console.log("error", error)
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error)
      })
    })
}