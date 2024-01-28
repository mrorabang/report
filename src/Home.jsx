import {
    MDBTable,
    MDBTableHead,
    MDBTableBody,
    MDBInput,
    MDBBtn,
    MDBIcon,
    MDBInputGroup,
    MDBFooter
} from "mdb-react-ui-kit";
import "./App.css";
import React, { useState, useEffect } from "react";
import alertify from 'alertifyjs';


function App() {
    const [reportData, setReportData] = useState([]);
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(
                    "https://65b4d71441db5efd2867019c.mockapi.io/data/1"
                );
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                setReportData(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    const [date, setdate] = useState();
    const [total, settotal] = useState();
    const [total_tron, settotal_tron] = useState();
    const [total_em, settotal_em] = useState();
    const [total_dam, settotal_dam] = useState();
    const [total_scl, settotal_scl] = useState();
    const [chi_khac, setchi_khac] = useState();
    const [sp, setsp] = useState();
    const [gr, setgr] = useState();

    const addInput = () => {
        const updateValue = {
            "date": date, "total": total, "total_tron": total_tron,
            "total_em": total_em, "total_dam": total_dam, "total_scl": total_scl, "chi_khac": chi_khac, "sp": sp,
            "gr": gr
        };

        fetch(`https://65b4d71441db5efd2867019c.mockapi.io/data/1`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateValue)
        }).then(res => {
            if (res.ok) {
                alertify.success('Lưu thành công.');;
            }
        }).catch(error => {
            console.error("Error updating data:", error);
        });
    }

    const handleIncrease = (fieldName) => {
        const updatedValue = reportData[fieldName] + 1;
        const updatedData = { ...reportData, [fieldName]: updatedValue };

        fetch(`https://65b4d71441db5efd2867019c.mockapi.io/data/1`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedData)
        }).then(res => {
            if (res.ok) {
                alertify.success('Số lượng đã thay đổi.');;
                setReportData(updatedData); // Cập nhật state reportData với dữ liệu mới
            }
        }).catch(error => {
            console.error("Error updating data:", error);
        });
    };

    const handleDecrease = (fieldName) => {
        const updatedValue = reportData[fieldName] - 1;
        if (updatedValue < 0) {
            alertify.warning("Giá trị không thể nhỏ hơn 0");
            return;
        }
        const updatedData = { ...reportData, [fieldName]: updatedValue };

        fetch(`https://65b4d71441db5efd2867019c.mockapi.io/data/1`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updatedData)
        }).then(res => {
            if (res.ok) {
                alertify.success('Số lượng đã thay đổi.');;
                setReportData(updatedData); // Cập nhật state reportData với dữ liệu mới
            }
        }).catch(error => {
            console.error("Error updating data:", error);
        });
    };


    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    // Tạo chuỗi ngày tháng năm
    const formattedDate = `${day}/${month}/${year}`;

    const resetData = () => {
        const updateValue = {
            "date": formattedDate,
            "total": 0,
            "total_tron": 0,
            "total_em": 0,
            "total_dam": 0,
            "total_scl": 0,
            "tron_b": 0,
            "tron_t": 0,
            "tron_5": 0,
            "em_b": 0,
            "em_t": 0,
            "em_5": 0,
            "dam_b": 0,
            "dam_t": 0,
            "dam_5": 0,
            "scl_b": 0,
            "scl_t": 0,
            "scl_5": 0,
            "tron_sp": 0,
            "em_sp": 0,
            "dam_sp": 0,
            "scl_sp": 0,
            "tron_gr": 0,
            "em_gr": 0,
            "dam_gr": 0,
            "scl_gr": 0,
            "tron_f": 0,
            "em_f": 0,
            "dam_f": 0,
            "scl_f": 0,
            "chi_khac": 0,
            "sp": 0,
            "gr": 0,
            "id": "1"
        };

        fetch(`https://65b4d71441db5efd2867019c.mockapi.io/data/1`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(updateValue)
        }).then(res => {
            if (res.ok) {
                alertify.success('Reset thành công.');;
                setReportData(updateValue); // Cập nhật state reportData với dữ liệu mới
            }
        }).catch(error => {
            console.error("Error updating data:", error);
        });
    }

    return (
        <div style={{ textAlign: "center" }}>
            <br />
            <h1>
                <center>Báo cáo doanh thu</center>
            </h1>
            <div className="btn-reset">
                <MDBBtn onClick={resetData} className="mb-3">Reset Data</MDBBtn>
            </div>
            <div class="badge badge-primary p-3 rounded-4 mb-3">
               {reportData.date}
            </div>
            <br />

            <MDBTable borderColor="primary" hover bordered>
                <MDBTableHead>
                    <tr>
                        <th>
                            Tổng nhập: <br />
                            <MDBInput
                                onChange={(e) => settotal(e.target.value)}
                                id="controlledValue"
                                type="text"
                            />
                        </th>
                        <th colSpan={3}>
                            Tròn vị: <br />
                            <MDBInput
                                onChange={(e) => settotal_tron(e.target.value)}
                                id="controlledValue"
                                type="number"
                            />
                        </th>
                        <th colSpan={3}>
                            Êm dịu: <br />
                            <MDBInput
                                onChange={(e) => settotal_em(e.target.value)}
                                id="controlledValue"
                                type="number"
                            />
                        </th>
                        <th colSpan={3}>
                            Đậm đà: <br />
                            <MDBInput
                                onChange={(e) => settotal_dam(e.target.value)}
                                id="controlledValue"
                                type="number"
                            />
                        </th>
                        <th colSpan={3}>
                            Quyến rũ: <br />
                            <MDBInput
                                onChange={(e) => settotal_scl(e.target.value)}
                                id="controlledValue"
                                type="number"
                            />
                        </th>
                    </tr>
                </MDBTableHead>
                <MDBTableBody>
                    <tr>
                        <th rowSpan={2}>Quầy</th>
                        <td>Bán</td>
                        <td>Tặng</td>
                        <td>5K</td>
                        <td>Bán</td>
                        <td>Tặng</td>
                        <td>5K</td>
                        <td>Bán</td>
                        <td>Tặng</td>
                        <td>5K</td>
                        <td>Bán</td>
                        <td>Tặng</td>
                        <td>5K</td>
                    </tr>
                    <tr>
                        <td>
                            <MDBBtn onClick={() => handleIncrease('tron_b')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>

                            <MDBInput
                                type="text"
                                readOnly
                                id="controlledValue"
                                value={reportData.tron_b}
                                defaultValue={0}

                            />

                            <MDBBtn onClick={() => handleDecrease('tron_b')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td>
                            <MDBBtn onClick={() => handleIncrease('tron_t')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>

                            <MDBInput
                                id="controlledValue"
                                type="text"
                                readOnly
                                defaultValue={0}
                                value={reportData.tron_t}
                            />

                            <MDBBtn onClick={() => handleDecrease('tron_t')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td>
                            <MDBBtn onClick={() => handleIncrease('tron_5')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>

                            <MDBInput
                                id="controlledValue"
                                type="text"
                                readOnly
                                defaultValue={0}
                                value={reportData.tron_5}
                            />

                            <MDBBtn onClick={() => handleDecrease('tron_5')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td>
                            <MDBBtn onClick={() => handleIncrease('em_b')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>

                            <MDBInput
                                id="controlledValue"
                                type="text"
                                readOnly
                                value={reportData.em_b}
                                defaultValue={0}

                            />

                            <MDBBtn onClick={() => handleDecrease('em_b')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td>
                            <MDBBtn onClick={() => handleIncrease('em_t')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>

                            <MDBInput
                                id="controlledValue"
                                type="text"
                                readOnly
                                defaultValue={0}
                                value={reportData.em_t}
                            />

                            <MDBBtn onClick={() => handleDecrease('em_t')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td>
                            <MDBBtn onClick={() => handleIncrease('em_5')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>
                            <MDBInput
                                id="controlledValue"
                                type="text"
                                readOnly
                                defaultValue={0}
                                value={reportData.em_5}
                            />

                            <MDBBtn onClick={() => handleDecrease('em_5')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>

                        <td>
                            <MDBBtn onClick={() => handleIncrease('dam_b')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>

                            <MDBInput
                                id="controlledValue"
                                type="text"
                                readOnly
                                defaultValue={0}
                                value={reportData.dam_b}
                            />

                            <MDBBtn onClick={() => handleDecrease('dam_b')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td>
                            <MDBBtn onClick={() => handleIncrease('dam_t')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>

                            <MDBInput
                                id="controlledValue"
                                type="text"
                                readOnly
                                defaultValue={0}
                                value={reportData.dam_t}
                            />

                            <MDBBtn onClick={() => handleDecrease('dam_t')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td>
                            <MDBBtn onClick={() => handleIncrease('dam_5')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>

                            <MDBInput
                                id="controlledValue"
                                type="text"
                                readOnly
                                defaultValue={0}
                                value={reportData.dam_5}
                            />

                            <MDBBtn onClick={() => handleDecrease('dam_5')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td>
                            <MDBBtn onClick={() => handleIncrease('scl_b')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>

                            <MDBInput
                                id="controlledValue"
                                type="text"
                                readOnly
                                defaultValue={0}
                                value={reportData.scl_b}
                            />

                            <MDBBtn onClick={() => handleDecrease('scl_b')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td>
                            <MDBBtn onClick={() => handleIncrease('scl_t')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>

                            <MDBInput
                                id="controlledValue"
                                type="text"
                                readOnly
                                defaultValue={0}
                                value={reportData.scl_t}
                            />

                            <MDBBtn onClick={() => handleDecrease('scl_t')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td>
                            <MDBBtn onClick={() => handleIncrease('scl_5')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>

                            <MDBInput
                                id="controlledValue"
                                type="text"
                                readOnly
                                defaultValue={0}
                                value={reportData.scl_5}
                            />

                            <MDBBtn onClick={() => handleDecrease('scl_5')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                    </tr>
                    <tr>
                        <th>Shopee</th>
                        <td colSpan={3}>
                            <MDBBtn onClick={() => handleIncrease('tron_sp')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>
                            <br />
                            <MDBBtn color="light" >
                                <MDBInput
                                    id="controlledValue"
                                    type="text"
                                    readOnly
                                    defaultValue={0}
                                    value={reportData.tron_sp}
                                />
                            </MDBBtn  >
                            <br />
                            <MDBBtn onClick={() => handleDecrease('tron_sp')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td colSpan={3}>
                            <MDBBtn onClick={() => handleIncrease('em_sp')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>
                            <br />
                            <MDBBtn color="light" rippleColor="light">
                                <MDBInput
                                    id="controlledValue"
                                    type="text"
                                    readOnly
                                    defaultValue={0}
                                    value={reportData.em_sp}
                                />
                            </MDBBtn>
                            <br />
                            <MDBBtn onClick={() => handleDecrease('em_sp')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td colSpan={3}>
                            <MDBBtn onClick={() => handleIncrease('dam_sp')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>
                            <br />
                            <MDBBtn color="light" rippleColor="light">
                                <MDBInput
                                    id="controlledValue"
                                    type="text"
                                    readOnly
                                    defaultValue={0}
                                    value={reportData.dam_sp}
                                />
                            </MDBBtn>
                            <br />
                            <MDBBtn onClick={() => handleDecrease('dam_sp')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td colSpan={3}>
                            <MDBBtn onClick={() => handleIncrease('scl_sp')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>
                            <br />
                            <MDBBtn color="light" rippleColor="light">
                                <MDBInput
                                    id="controlledValue"
                                    type="text"
                                    readOnly
                                    defaultValue={0}
                                    value={reportData.scl_sp}
                                />
                            </MDBBtn>
                            <br />
                            <MDBBtn onClick={() => handleDecrease('scl_sp')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                    </tr>
                    <tr>
                        <th>Grab</th>
                        <td colSpan={3}>
                            <MDBBtn onClick={() => handleIncrease('tron_gr')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>
                            <br />
                            <MDBBtn color="light" rippleColor="light">
                                <MDBInput
                                    id="controlledValue"
                                    type="text"
                                    readOnly
                                    defaultValue={0}
                                    value={reportData.tron_gr}
                                />
                            </MDBBtn>
                            <br />
                            <MDBBtn onClick={() => handleDecrease('tron_gr')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td colSpan={3}>
                            <MDBBtn onClick={() => handleIncrease('em_gr')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>
                            <br />
                            <MDBBtn color="light" rippleColor="light">
                                <MDBInput
                                    id="controlledValue"
                                    type="text"
                                    readOnly
                                    defaultValue={0}
                                    value={reportData.em_gr}
                                />
                            </MDBBtn>
                            <br />
                            <MDBBtn onClick={() => handleDecrease('em_gr')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td colSpan={3}>
                            <MDBBtn onClick={() => handleIncrease('dam_gr')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>
                            <br />
                            <MDBBtn color="light" rippleColor="light">
                                <MDBInput
                                    id="controlledValue"
                                    type="text"
                                    readOnly
                                    defaultValue={0}
                                    value={reportData.dam_gr}
                                />
                            </MDBBtn>
                            <br />
                            <MDBBtn onClick={() => handleDecrease('dam_gr')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td colSpan={3}>
                            <MDBBtn onClick={() => handleIncrease('scl_gr')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>
                            <br />
                            <MDBBtn color="light" rippleColor="light">
                                <MDBInput
                                    id="controlledValue"
                                    type="text"
                                    readOnly
                                    defaultValue={0}
                                    value={reportData.scl_gr}
                                />
                            </MDBBtn>
                            <br />
                            <MDBBtn onClick={() => handleDecrease('scl_gr')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                    </tr>
                    <tr>
                        <th>Free</th>
                        <td colSpan={3}>
                            <MDBBtn onClick={() => handleIncrease('tron_f')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>
                            <br />
                            <MDBBtn color="light" rippleColor="light">
                                <MDBInput
                                    id="controlledValue"
                                    type="text"
                                    readOnly
                                    defaultValue={0}
                                    value={reportData.tron_f}
                                />
                            </MDBBtn>
                            <br />
                            <MDBBtn onClick={() => handleDecrease('tron_f')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td colSpan={3}>
                            <MDBBtn onClick={() => handleIncrease('em_f')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>
                            <br />
                            <MDBBtn color="light" rippleColor="light">
                                <MDBInput
                                    id="controlledValue"
                                    type="text"
                                    readOnly
                                    defaultValue={0}
                                    value={reportData.em_f}
                                />
                            </MDBBtn>
                            <br />
                            <MDBBtn onClick={() => handleDecrease('em_f')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td colSpan={3}>
                            <MDBBtn onClick={() => handleIncrease('dam_f')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>
                            <br />
                            <MDBBtn color="light" rippleColor="light">
                                <MDBInput
                                    id="controlledValue"
                                    type="text"
                                    readOnly
                                    defaultValue={0}
                                    value={reportData.dam_f}
                                />
                            </MDBBtn>
                            <br />
                            <MDBBtn onClick={() => handleDecrease('dam_f')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                        <td colSpan={3}>
                            <MDBBtn onClick={() => handleIncrease('scl_f')}>
                                <MDBIcon fas icon="plus" />
                            </MDBBtn>
                            <br />
                            <MDBBtn color="light" rippleColor="light">
                                <MDBInput
                                    id="controlledValue"
                                    type="text"
                                    readOnly
                                    defaultValue={0}
                                    value={reportData.scl_f}
                                />
                            </MDBBtn>
                            <br />
                            <MDBBtn onClick={() => handleDecrease('scl_f')}>
                                <MDBIcon fas icon="minus" />
                            </MDBBtn>
                        </td>
                    </tr>
                    <tr>
                        <th colSpan={13}><MDBInputGroup className='mb-3'>
                            <span className='input-group-text'>Doanh thu Shoppee</span>
                            <input className='form-control' type='text' defaultValue={0} onChange={(e) => setsp(e.target.value)} />
                            <span className='input-group-text'>Doanh thu Grab</span>
                            <input className='form-control' defaultValue={0} onChange={(e) => setgr(e.target.value)} type='text' />
                        </MDBInputGroup></th>

                    </tr>
                    <tr>
                        <th>Chi khác(K)</th>
                        <td colSpan={12}>
                            <MDBInput
                                id="form1"
                                type="number"
                                defaultValue={0}
                                onChange={(e) => setchi_khac(e.target.value)}
                            />
                        </td>
                    </tr>
                </MDBTableBody>
            </MDBTable>
            <MDBBtn rounded className="mb-3" onClick={addInput}>Save</MDBBtn>
            <br />
            <h1>
                <center>Báo cáo doanh số + doanh thu</center>
            </h1>
            <MDBTable bordered striped borderColor="warning">
                <MDBTableHead>
                    <tr>
                        <th>Options</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                    </tr>
                    <tr>
                        <th>Bán</th>
                        <td>
                            {reportData.tron_b + reportData.em_b + reportData.dam_b + reportData.scl_b}
                        </td>
                        <td> {(reportData.tron_b + reportData.em_b + reportData.dam_b + reportData.scl_b) * 27}K</td>
                    </tr>
                    <tr>
                        <th>Tặng</th>
                        <td>{reportData.tron_t + reportData.em_t + reportData.dam_t + reportData.scl_t}</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Phiếu 5K</th>
                        <td>{reportData.tron_5 + reportData.em_5 + reportData.dam_5 + reportData.scl_5}</td>
                        <td>{(reportData.tron_5 + reportData.em_5 + reportData.dam_5 + reportData.scl_5) * 5}K</td>
                    </tr>
                    <tr>
                        <th>Shoppe</th>
                        <td>{reportData.tron_sp + reportData.em_sp + reportData.dam_sp + reportData.scl_sp}</td>
                        <td>{reportData.sp}K</td>
                    </tr>
                    <tr>
                        <th>Grab</th>
                        <td>{reportData.tron_gr + reportData.em_gr + reportData.dam_gr + reportData.scl_gr}</td>
                        <td>{reportData.gr}K</td>
                    </tr>
                    <tr>
                        <th>Free</th>
                        <td>{reportData.tron_f + reportData.em_f + reportData.dam_f + reportData.scl_f}</td>
                        <td>0</td>
                    </tr>
                    <tr>
                        <th>Chi khác</th>
                        <td>No comment</td>
                        <td>{reportData.chi_khac}K</td>
                    </tr>
                    <tr>
                        <th style={{ color: "red" }}>Xuất (chai)</th>
                        <td>{reportData.tron_b + reportData.em_b + reportData.dam_b + reportData.scl_b + reportData.tron_t + reportData.em_t + reportData.dam_t + reportData.scl_t + reportData.tron_5 + reportData.em_5 + reportData.dam_5 + reportData.scl_5 +
                            reportData.tron_sp + reportData.em_sp + reportData.dam_sp + reportData.scl_sp +
                            reportData.tron_gr + reportData.em_gr + reportData.dam_gr + reportData.scl_gr +
                            reportData.tron_f + reportData.em_f + reportData.dam_f + reportData.scl_f
                        }</td>
                        <td>No comment</td>
                    </tr>
                    <tr>
                        <th style={{ color: "red" }}>TỔNG THU :</th>
                        <td colSpan={2}>
                            {(reportData.tron_b + reportData.em_b + reportData.dam_b + reportData.scl_b) * 27 +
                                (reportData.tron_5 + reportData.em_5 + reportData.dam_5 + reportData.scl_5) * 5
                                + reportData.sp + reportData.gr - reportData.chi_khac
                            }K
                        </td>
                    </tr>
                </MDBTableHead>
            </MDBTable>

            <MDBFooter bgColor='light' className='text-center text-lg-left'>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()} Copyright by Minh Quan
                </div>
            </MDBFooter>
        </div>
    );
}

export default App;
