import { useRecoilValue } from "recoil"
import { changeColorAtom } from "../RecoilStorage"

export default function ChangeTextColor(){
    const color = useRecoilValue(changeColorAtom)
    return (
        <h1 style = {color ? {color:"blue"}:{color:"red"}}>Hi, I change the color on change the button</h1>
    )
}