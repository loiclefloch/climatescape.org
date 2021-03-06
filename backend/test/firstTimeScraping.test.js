const { determineOrgsToScrapeFirstTime } = require("../src/firstTimeScraping")
const { fillSampleOrgData } = require("./prepareDb")
const { knex, executeKnex, executeCount } = require("../src/db/pg")

describe("determineOrgsToScrapeFirstTime", () => {
  test("basically works", async () => {
    await fillSampleOrgData()
    expect(await executeCount("organizations")).toBe(55)
    await executeKnex(
      knex("scraping_results").insert({
        org_id: "rec01lt5ZeLGlwpg2",
        request_type: "twitterUserObject",
        result: { followers_count: 100 },
      })
    )
    const orgsToScrapeFirstTime = await determineOrgsToScrapeFirstTime(
      "twitterUserObject"
    )
    expect(orgsToScrapeFirstTime.length).toBe(54)
  })
})
