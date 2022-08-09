import { atom } from 'recoil'
import { useRecoilState } from 'recoil'

let user = {
    userId: '',
    userName: 'Simon'
}

let message = {
    userId: '',
    userName: 'Simon',
    date: '8/5/2022',
    message: 'yo, I\'m such a gamer aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa aaaaa aaaa aaa aaaaaa aaaa'
}

let channel = {
    name: 'text channel',
    messages: [message]
}

let chenns = []
for(let i = 0; i < 20; i++) {
    let tc = JSON.parse(JSON.stringify(channel))
    tc.messages = Array(i * 10).fill(message)

    tc.name = "text channel" + i

    chenns[i] = tc
}
let server = {
    name: 'serber',
    users: [user,user,user],
    channels: chenns
}

let servers = Array(5).fill(server)

let ServerStateAtom = atom({
    key: 'ServerListState',
    default: servers
})

export default ServerStateAtom