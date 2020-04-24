import faunadb from 'faunadb'

const q = faunadb.query
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SECRET,
})

exports.handler = (event, context, callback) => {
  return client
    .query(q.Paginate(q.Match(q.Ref('indexes/all_cooks'))))
    .then((response) => {
      const cooksRefs = response.data
      const getAllCooksDataQuery = cooksRefs.map((ref) => {
        return q.Get(ref)
      })
      // then query the refs
      return client.query(getAllCooksDataQuery).then((ret) => {
        console.log(ret)
        ret = ret
          .filter((item) => item.data.name.toLowerCase().match(event.queryStringParameters.filter))
          .sort((a, b) => {
            const date1 = Number(a.data.date.replace(/-/g, ''))
            const date2 = Number(b.data.date.replace(/-/g, ''))
            if (date1 > date2) {
              return -1
            } else if (date1 < date2) {
              return 1
            }
            return 0
          })
        return callback(null, {
          statusCode: 200,
          body: JSON.stringify(ret),
        })
      })
    })
    .catch((error) => {
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      })
    })
}
