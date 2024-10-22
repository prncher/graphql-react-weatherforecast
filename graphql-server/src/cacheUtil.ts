// memcached -u memcached -d -m 30 -l 127.0.0.1 -p 11211
// telnet localhost 11211

import Memcached from "memcached"
import { Period } from "./watherAPI"

// cache support
const cacheClient = new Memcached('127.0.0.1:11211', {
    retries: 10,
    retry: 1000,
    remove: true,
    maxKeySize: 512,
    reconnect: 180000,
    timeout: 10000,
    failures: 10,
    idle: 15000
})

const set = async (context: { cache: Memcached }, key: string, value: Period[]): Promise<true> => {
    return new Promise((resolve, reject) => {
        const client = context.cache;
        client.set(key, value, 3600, (err: any, result: boolean) => {
            if (!err && result){
                resolve(result)
            }
            else{
                reject(err)
            }
        })
    })
}

const get = async (context: { cache: Memcached }, key: string): Promise<Period[]> => {
    return new Promise((resolve, reject) => {
        const client = context.cache;
        client.get(key, (err: any, data: any) => {
            if (!err){
                resolve(data)
            }
            else{
                reject(err)
            }
        })
    })
}

export { cacheClient, set, get }
