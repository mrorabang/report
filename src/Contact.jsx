import { MDBIcon, MDBFooter } from "mdb-react-ui-kit";
function Contact() {
    return (
        <div style={{ fontSize: '30px' }}>
            <h1>Contact me : </h1>
            <MDBIcon fab icon="facebook" size="lg" /> <a href="https://www.facebook.com/mquan.0903">Minh Quân</a> <br />
            <MDBIcon fas icon="phone-alt" size="lg" /> 036.430.4301

            <MDBFooter bgColor='light' className='text-center text-lg-left'>
                <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                    &copy; {new Date().getFullYear()} Copyright by Minh Quan
                </div>
            </MDBFooter>
        </div>
    );
}

export default Contact;