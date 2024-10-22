import { GraphQLResolveInfo } from "graphql"
import { Address, Period, getWeatherData } from "./watherAPI.js"
import { State, getStates } from "./statesAPI.js"
import Memcached from "memcached"

const weatherPeriods = async (address:Address, context: { cache: Memcached }): Promise<Period[]> => {
    return await getWeatherData(address, context)
}

const states = async (): Promise<State[]> => {
    return await getStates()
}

// resolver function
const resolvers = {
    Query: {
        periods: async (
            obj:any, 
            args:Address, 
            context:{ cache: Memcached }, 
            info:GraphQLResolveInfo) => {
            return await weatherPeriods(args, context)
        },
        states: async (            
            obj:any, 
            args:any, 
            context:{ cache: Memcached }, 
            info:GraphQLResolveInfo) => await states()
    },
}

export default resolvers