import { useState, useEffect } from "react";
import { MDBFooter } from "mdb-react-ui-kit";
function ViewReport() {
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

    return (
        <>
            <h1>
                <center>
                    Báo cáo messenger
                </center>
            </h1>
            <div className="row ms-5 mt-3 me-5">
                <div className="col-6">
                    <textarea name="" id="" cols="70" rows="10" value={`
HP99 SG ${reportData.date}
** Sáng
Nhập: ${reportData.total}
** Doanh số 
Xuất : ${reportData.tron_b + reportData.em_b + reportData.dam_b + reportData.scl_b + reportData.tron_t + reportData.em_t + reportData.dam_t + reportData.scl_t + reportData.tron_5 + reportData.em_5 + reportData.dam_5 + reportData.scl_5 +
                        reportData.tron_sp + reportData.em_sp + reportData.dam_sp + reportData.scl_sp +
                        reportData.tron_gr + reportData.em_gr + reportData.dam_gr + reportData.scl_gr +
                        reportData.tron_f + reportData.em_f + reportData.dam_f + reportData.scl_f} chai
    - Bán : ${reportData.tron_b + reportData.em_b + reportData.dam_b + reportData.scl_b} chai
    - Tặng : ${reportData.tron_t + reportData.em_t + reportData.dam_t + reportData.scl_t} chai
    - Phiếu 5K :${reportData.tron_5 + reportData.em_5 + reportData.dam_5 + reportData.scl_5} chai
    - Shoppe : ${reportData.tron_sp + reportData.em_sp + reportData.dam_sp + reportData.scl_sp} chai
    - Grab : ${reportData.tron_gr + reportData.em_gr + reportData.dam_gr + reportData.scl_gr} chai
    - Free : ${reportData.tron_f + reportData.em_f + reportData.dam_f + reportData.scl_f} chai
** Doanh thu 
    - Bán : ${(reportData.tron_b + reportData.em_b + reportData.dam_b + reportData.scl_b) * 27}K
    - Phiếu 5K : ${(reportData.tron_5 + reportData.em_5 + reportData.dam_5 + reportData.scl_5) * 5}K
    - Shoppe : ${reportData.sp}K
    - Grab : ${reportData.gr}K
    - Chi khác : ${reportData.chi_khac}K
    - CÒN LẠI : ${(reportData.tron_b + reportData.em_b + reportData.dam_b + reportData.scl_b) * 27 + (reportData.tron_5 + reportData.em_5 + reportData.dam_5 + reportData.scl_5) * 5 + reportData.sp + reportData.gr - reportData.chi_khac}K
`}>
                    </textarea>
                </div>
                <div className="col-6">
                    <textarea name="" id="" cols="70" rows="10" value={`
HP99 SG ${reportData.date}
** Nguyên liệu : 
    - Bịch combo : ${reportData.bich_combo}
    - Ly giấy : ${reportData.ly_giay}
    - Nắp : ${reportData.nap}
    - Ống hút : ${reportData.ong_hut}
    - Chữ T : ${reportData.chu_t}
    - Bịch rác : ${reportData.bich_rac}
                    `}></textarea>
                </div>
            </div>
            <div className="row ms-5 me-5 mt-5">
                <div className="col-6">
                    <textarea name="" id="" cols="70" rows="10" value={`
Tồn 
    - Tròn vị : ${reportData.total_tron} : ${reportData.total_tron - reportData.tron_b - reportData.tron_t - reportData.tron_5 - reportData.tron_sp - reportData.tron_gr - reportData.tron_f} 
    - Êm dịu : ${reportData.total_em} : ${reportData.total_em - reportData.em_b - reportData.em_t - reportData.em_5 - reportData.em_sp - reportData.em_gr - reportData.em_f}
    - Đậm đà :  ${reportData.total_dam} : ${reportData.total_dam - reportData.dam_b - reportData.dam_t - reportData.dam_5 - reportData.dam_sp - reportData.dam_gr - reportData.dam_f}
    - Quyến rũ :  ${reportData.total_scl} : ${reportData.total_scl - reportData.scl_b - reportData.scl_t - reportData.scl_5 - reportData.scl_sp - reportData.scl_gr - reportData.scl_f}
                    `}></textarea>
                </div>
            </div>
            <MDBFooter bgColor='light' className='text-center text-lg-left'>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()} Copyright by Minh Quan
                </div>
            </MDBFooter>
        </>
    );
}

export default ViewReport;