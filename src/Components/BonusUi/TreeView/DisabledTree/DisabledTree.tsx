import { Card, CardBody, Col } from "reactstrap";
import CommonHeader from "@/Common/CommonHeader";
import TreeView, { flattenTree } from "react-accessible-treeview";
import { DisabledTrees } from "@/utils/Constant";
import { ArrowIcon, CheckBoxIcon } from "../BasicTree/BasicTree";
import { simpleTreeviewData } from "@/Data/BonusUi/treeView/TreeViewData";

const DisabledTree = () => {
  const disableTreeData = flattenTree(simpleTreeviewData);
  return (
    <Col sm={6}>
      <Card>
        <CommonHeader title={DisabledTrees} subTitle={[{ text: "Use the dynamic tree view with checkboxes." }]} headClass="pb-0"/>
        <CardBody>
          <div className="disabled-container">
            <div className="checkbox">
              <TreeView data={disableTreeData} aria-label="Checkbox tree" multiSelect propagateSelect propagateSelectUpwards defaultDisabledIds={[2, 3, 4, 5]} togglableSelect expandedIds={[1,2,6,10]} nodeRenderer={({ element, isBranch, isExpanded, isSelected, isDisabled, isHalfSelected, getNodeProps, level, handleSelect, handleExpand }) => {
                  return (
                    <div {...getNodeProps({ onClick: handleExpand })} style={{ marginLeft: 40 * (level - 1), opacity: isDisabled ? 0.5 : 1,marginTop:5 }}>
                      {isBranch && <ArrowIcon isOpen={isExpanded} />}<CheckBoxIcon className="checkbox-icon " onClick={(e: any) => { handleSelect(e); e.stopPropagation(); }} variant={isHalfSelected ? "some" : isSelected ? "all" : "none"} /><span className="name">{element.name}</span>
                      </div>
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

export default DisabledTree;
