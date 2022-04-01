import { createServer } from 'http'
import { setTimeout } from 'timers/promises'

const result = {
    name : 'klebermeira',
    age : '23',
    profession: 'software developer'
}

const MAX_TIMEOUT = 200

async function handle(request, response){
    await setTimeout(MAX_TIMEOUT)
    return response.end(JSON.stringify(result))
}

createServer()
.listen(3000)
.on('listening', () => console.log('server listening 3000'))