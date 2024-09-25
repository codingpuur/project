import { MarkJecnoBlog } from "@/utils/Constant";

const MarkjencoBlogDetails = () => {
  return (
    <div className='blog-details'>
      <p>25 July 2023</p>
      <h4>{MarkJecnoBlog}</h4>
      <ul className='blog-social flex-row d-block'>
        <li>
          <i className='icofont icofont-user' />
          {"Mark Jecno"}
        </li>
        <li>
          <i className='icofont icofont-thumbs-up' />
          02 {"Hits"}
        </li>
        <li>
          <i className='icofont icofont-ui-chat' />
          {"598 Comments"}
        </li>
      </ul>
    </div>
  );
};

export default MarkjencoBlogDetails;
