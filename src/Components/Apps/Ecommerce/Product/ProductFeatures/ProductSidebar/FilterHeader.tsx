import { CardHeader } from 'reactstrap';
import { Filters } from '@/utils/Constant';
import { setSideBarOn } from '@/Redux/Reducer/FilterSlice';
import { useAppDispatch } from '@/Redux/Hooks';

const FilterHeader = () => {
  const dispatch = useAppDispatch();
  return (
    <CardHeader>
      <h4 className="mb-0 f-w-600">
        {Filters}
        <span className="pull-right" onClick={() => dispatch(setSideBarOn())}>
          <i className="fa fa-chevron-down toggle-data"></i>
        </span>
      </h4>
    </CardHeader>
  )
}

export default FilterHeader