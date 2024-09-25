import { Form, Input } from 'reactstrap'
import { useState } from 'react';
import { useAppDispatch } from '@/Redux/Hooks';
import { searchMember } from '@/Redux/Reducer/ChatSlice';

const SearchChatList = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const dispatch = useAppDispatch();

  const handleSearchKeyword = (keyword: string) => {
    setSearchKeyword(keyword);
    dispatch({ type: "searchMember", payload: keyword });
    dispatch(searchMember(keyword));
  };
  return (
    <div className="search">
      <Form className="theme-form">
        <div className="mb-3">
          <Input
            type="text"
            defaultValue={searchKeyword}
            placeholder="search"
            onChange={(e) => handleSearchKeyword(e.target.value)}
          />
          <i className="fa fa-search" />
        </div>
      </Form>
    </div>
  )
}

export default SearchChatList