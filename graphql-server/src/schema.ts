    export const schema = `type ProbabilityOfPrecipitation {
        unitCode: String!
        value: Int
    }

    type State {
        name: String!
        abbreviation: String!
    }

    type Period {
        number: Int! 
        name: String!
        startTime: String!
        endTime: String!
        isDaytime: Boolean! 
        temperature: Int!
        temperatureUnit: String!
        temperatureTrend: String!
        probabilityOfPrecipitation: ProbabilityOfPrecipitation!
        windSpeed: String!
        windDirection: String!
        icon: String!
        shortForecast: String!
        detailedForecast: String!
    }
    
    type Address {
        street: String!
        city: String!
        state:String!
    }

    type Query {
        periods(street: String!, city: String!, state: String!): [Period]
        states: [State!]!
    }
    `