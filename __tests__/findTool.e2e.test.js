const renderDOM = require('./helpers/renderDOM')
const { insertAllTools } = require('./helpers/testDatabase');

let dom;
let document;
const frontend = '../../../quacksquad_frontend'

describe("'Find Tool' page",
    () => {

        // Mock data for `tool` table
        const mockTools = [
            {
                tool_name: "Rubber duck",
                description: "A playful bathtime friend.",
                price_per_day: 3.50
            },
            {
                tool_name: "Heavy hammer",
                description: "Very heavy; you barely need to apply any downward force when hammering floorboards..",
                price_per_day: 4
            }
        ]

        beforeAll(async () => {
            await insertAllTools(mockTools)
        })

        beforeEach(async () => {
            dom = await renderDOM(frontend + 'pages/findTool.html')
            document = await dom.window.document
        })

        // AS A service user,
        // I WANT to see what tools are available,
        // SO THAT I can pick one.
        it("shows available tools",
            () => {
                const tools = document.querySelector('toolList').querySelector('.tool-item')
                // console.log(tools)

                expect(tools.length).toBe(3)

                const tool1 = tools[0]
                expect(tool1.querySelector('.tool-name').textContent).toBe("Rubber Duck")
                expect(tool1.querySelector('.tool-description').textContent).toBe("A playful bathtime friend.")
                expect(tool1.querySelector('.tool-price').textContent).toBe("Price per day: £3.50")

                const tool2 = tools[1]
                expect(tool2.querySelector('.tool-name').textContent).toBe("Heavy hammer")
                expect(tool2.querySelector('.tool-description').textContent).toBe("Very heavy; you barely need to apply any downward force when hammering floorboards..")
                expect(tool2.querySelector('tool-price').textContent).toBe("Price per day: £4.00")
            }
        )

        // More tests here 

    }
)