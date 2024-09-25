import { useAppDispatch } from '@/Redux/Hooks'
import { setToggleSideBar } from '@/Redux/Reducer/ChatSlice'
import { Headphones, Menu, Paperclip, Search, Video } from 'react-feather'
import { List, ListInlineItem } from 'reactstrap'

const IconsMenuList = () => {
  const dispatch = useAppDispatch()
  return (
    <List type='inline' className="float-start float-sm-end chat-menu-icons flex-row">
      <ListInlineItem >
        <Search />
      </ListInlineItem>
      <ListInlineItem>
        <Paperclip />
      </ListInlineItem>
      <ListInlineItem>
        <Headphones />
      </ListInlineItem>
      <ListInlineItem>
        <Video />
      </ListInlineItem>
      <ListInlineItem className="toogle-bar" >
        <Menu onClick={()=>dispatch(setToggleSideBar())}/>
      </ListInlineItem>
    </List>
  )
}

export default IconsMenuList