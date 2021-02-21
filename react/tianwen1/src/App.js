import React from "react";
import "./css/app.css";
import { Button, Modal, InputNumber, Tree, Table } from "antd";
import {
  library,
  Device,
  contact,
  getTableData,
  getTreeSelected,
} from "./data/library";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
      selectLibraryIndex: 0,
      selectedChannel: [],
      tabledata: [],
    };
  }
  componentDidMount() {
    const { selectLibraryIndex } = this.state;
    let tabledata = getTableData(contact, selectLibraryIndex);
    let selectedChannel = getTreeSelected(contact, selectLibraryIndex);
    console.table(selectedChannel);
    this.setState((prevState, props) => ({
      tabledata,
      selectedChannel,
    }));
  }
  openDialog = () => {
    this.setState((prevState, props) => ({
      isModalVisible: true,
    }));
  };
  handleOk = () => {
    this.setState((prevState, props) => ({
      isModalVisible: false,
    }));
  };
  handleCancel = () => {
    this.setState((prevState, props) => ({
      isModalVisible: false,
    }));
  };
  selectLibrary = (e, index) => {
    console.log(index);
    let tabledata = getTableData(contact, index);
    let selectedChannel = getTreeSelected(contact, index);

    this.setState({
      selectLibraryIndex: index,
      tabledata,
      selectedChannel,
    });
  };
  deleteTableData = (record) => {
    let { tabledata, selectedChannel } = this.state;
    this.setState({
      tabledata: tabledata.filter((item) => {
        return item.key !== record.key;
      }),
      selectedChannel: selectedChannel.filter((item) => {
        return item.slice(2) !== record.key.slice(7);
      }),
    });
  };
  getTreeData = () => {
    let data = {};
    data.title = "Root";
    data.key = "treedata0";
    data.children = [];
    Device.forEach(function (item, index) {
      if (item.type === "ipc") {
        data.children.push({
          title: item.name,
          key: "#S" + item.channelID,
        });
      } else {
        let obj = {
          title: item.name,
          key: "#T" + (index + 1),
          children: [],
        };
        (item.child || []).forEach(function (val, i) {
          obj.children.push({
            title: val.name,
            key: "#S" + val.channelID,
          });
        });
        data.children.push(obj);
      }
    });
    console.log(data);
    return [data];
  };
  checkTreeNode = (e)=>{
    console.log(e);
    this.setState({
      selectedChannel: e
    });
  }
  render() {
    console.log("state", this.state);
    const treeData = this.getTreeData();
    const { selectLibraryIndex } = this.state;
    let me = this;
    const columns = [
      {
        title: "通道",
        dataIndex: "name",
        key: "name",
        ellipsis: true,
      },
      {
        title: "相似度",
        dataIndex: "similar",
        key: "similar",
      },
      {
        title: "编辑",
        dataIndex: "edit",
        key: "edit",
        render: (text, record, index) => {
          return (
            <button
              onClick={(e) => {
                me.deleteTableData(record);
              }}
            >
              删除
            </button>
          );
        },
      },
    ];
    console.log(treeData);
    return (
      <>
        <div className="_myApp_">
          <Button type="primary" onClick={this.openDialog}>
            打开弹出框
          </Button>
          <InputNumber min={1} max={100} defaultValue={80} />
          <Modal
            title="设置弹出框"
            visible={this.state.isModalVisible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            width={720}
            className="_setlibraryDialog_"
          >
            <div className="library">
              {library.map((item, index) => {
                return (
                  <div
                    className={`name_div ${
                      selectLibraryIndex !== index ? "normal" : "select"
                    }`}
                    key={`index${index}`}
                    onClick={(e) => this.selectLibrary(e, index)}
                  >
                    <span
                      className="textover name_span"
                      title={item.name || ""}
                    >
                      {item.name || ""}
                    </span>
                    <InputNumber
                      min={1}
                      max={100}
                      defaultValue={80}
                      style={{ verticalAlign: "16px" }}
                    />
                    <span className="percent_span">%</span>
                  </div>
                );
              })}
            </div>
            <div className="control">
              <div className="librayname">
                <span>布控 库名</span>
              </div>
              <div>
                <div className="librarytree_div">
                  <Tree
                    checkable
                    treeData={treeData}
                    defaultExpandAll={true}
                    defaultCheckedKeys={this.state.selectedChannel}
                    checkedKeys={this.state.selectedChannel}
                    onCheck = {(e)=>this.checkTreeNode(e)}
                  />
                </div>
                <div className="selectedlibrary_div">
                  <Table
                    dataSource={this.state.tabledata}
                    columns={columns}
                    pagination={false}
                    size={"small"}

                  />
                </div>
              </div>
              <div></div>
            </div>
          </Modal>
        </div>
      </>
    );
  }
}

export default App;
