import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import { BasicTrees } from "@/utils/Constant";
import { IoMdArrowDropright } from "react-icons/io";
import TreeView, { flattenTree } from "react-accessible-treeview";
import cx from "classnames";
import { FaCheckSquare, FaMinusSquare, FaSquare } from "react-icons/fa";
import { simpleTreeviewData } from "@/Data/BonusUi/treeView/TreeViewData";
import { BasicTreesProp } from "@/Types/BonusuiTypes";
 
export const ArrowIcon = ({ isOpen, className }: BasicTreesProp) => {
  const baseClass = "arrow";
  const classes = cx(baseClass, { [`${baseClass}--closed`]: !isOpen }, { [`${baseClass}--open`]: isOpen }, className);
  return <IoMdArrowDropright className={classes} />;
};

export const CheckBoxIcon = ({ variant, ...rest }: BasicTreesProp) => {
  switch (variant) {
    case "all": return <FaCheckSquare color="#4AAD8A" {...rest} />; 
    case "none": return <FaSquare color="white" {...rest} style={{ border: "1px solid #80808069" }} />;
    case "some": return <FaMinusSquare {...rest} color="#33BFBF" />; 
    default: return null;
  }
};
const BasicTree = () => {
  const treeData = flattenTree(simpleTreeviewData);
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={BasicTrees} subTitle={[{text:"Use the dynamic tree view with checkboxes."}]} headClass="pb-0"/>
        <CardBody>
          <div className="tree-container">
            <div className="checkbox">
              <TreeView data={treeData} aria-label="Checkbox tree" multiSelect propagateSelect propagateSelectUpwards togglableSelect expandedIds={[1,2,6,10]} defaultSelectedIds={[1,2,3]} nodeRenderer={({ element, isBranch, isExpanded, isSelected, isHalfSelected, getNodeProps, level, handleSelect, handleExpand }) => {
                  return (
                    <div {...getNodeProps({ onClick: handleExpand })} style={{ marginLeft: 40 * (level - 1),marginTop:5 }} className="d-flex align-items-center">
                      {isBranch && <ArrowIcon isOpen={isExpanded} />}
                      <CheckBoxIcon className="checkbox-icon " onClick={(e: any) => { handleSelect(e); e.stopPropagation(); }} variant={isHalfSelected ? "some" : isSelected ? "all" : "none"} /><span className="name">{element.name}</span></div>
                  );
                }}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTree;
