import { Heading1, Heading2, Heading3, Heading4, Heading5, Heading6 } from "@/utils/Constant";

const HeadingsTablesBody = () => {
  return (
    <>
      <tr>
        <td><code>{"<h1></h1>"}</code></td>
        <td><h1 className='mb-0'>1.875</h1></td>
        <td><h1><span>{Heading1}</span></h1></td>
      </tr>
      <tr>
        <td><code>{"<h2></h2>"}</code></td>
        <td><h2 className='mb-0'>1.625</h2></td>
        <td><h2><span> {Heading2}</span></h2></td>
      </tr>
      <tr>
        <td><code>{"<h3></h3>"}</code></td>
        <td><h3 className='mb-0'>1.25</h3></td>
        <td><h3><span>{Heading3}</span></h3></td>
      </tr>
      <tr>
        <td><code>{"<h4></h4>"}</code></td>
        <td><h4 className='mb-0'>0.875</h4></td>
        <td><h4><span> {Heading4}</span></h4></td>
      </tr>
      <tr>
        <td><code>{"<h5></h5>"}</code></td>
        <td><h5 className='mb-0'>0.813</h5></td>
        <td><h5><span> {Heading5}</span></h5></td>
      </tr>
      <tr>
        <td className='pb-0'><code>{"<h6></h6>"}</code></td>
        <td className='pb-0'><h6 className='mb-0'>0.75</h6></td>
        <td className='pb-0'><h6><span>{Heading6} </span></h6></td>
      </tr>
    </>
  );
};

export default HeadingsTablesBody;
