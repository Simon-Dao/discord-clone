import { atom } from 'recoil'
import { useRecoilState } from 'recoil'

let CurrentElementState = atom({
    key: 'CurrentElementState',
    default: {
        serverIndex: 0,
        channelIndex: 3
    }
})

export default CurrentElementState