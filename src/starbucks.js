import lady from './images/lady.png'
import './starbucks.css'
const Starbucks = () => {
    return (
        <div className="body">
            <div className="pic">
                <img src={lady} alt="" />
            </div>
            <div className="info">
                <h1>Get started at ASU today!</h1>
                <p>Please fill out the form to request additional information. Our enrollment coaches can answer your questions about the application process, degree programs, financial aid and more.</p>
                <div className="form">
                    <div className="head">
                         <div className="head1">
                         <label htmlFor="name"><b>First name</b></label><br />
                         <input type="text" id='name' />
                         </div>
                         <div className="head2">
                           <label htmlFor="last"><b>Last name</b></label><br />
                             <input type="text" id='last' />
                         </div>
                    </div><br />
                    <label htmlFor="email"><b id='bold'>Email</b></label><br />
                    <input type="text" id='email' /><br />
                    <label htmlFor="phone"  ><b id='bold'>Phone</b> </label><br />
                    <input type="tel" value='+91-' mavvalue='14' id='phone' /><br />
                    <label htmlFor="degree"><b id='bold'>Degree Program</b></label><br />
                   <select name="" id="degree" ><option value="">select any degree</option></select><br />
                   
                    <input type="radio" id='radio' name='radio' /><label htmlFor="radio"><b>Yes, I am a Starbucks partner.</b></label><br />
                    <input type="radio" id='radio' name='radio' /><label htmlFor="radio"><b>No, I am not a Starbucks partner.</b></label><br />
                    <p id='para'>By submitting my information, I consent to ASU contacting me about educational services using automated calls, prerecorded voice messages, SMS/text messages or email at the information provided above. Message and data rates may apply. To opt out of messages, text STOP to 46278. Consent is not required to receive services, and I may call ASU directly at 844-278-7289. I consent to ASU’s mobile terms and conditions, Privacy Statement, including the European Supplement, and ASU Online’s web analytics privacy policy.

                    </p><br />
                    <button id='btn'>Submit</button>
                </div>
            </div>
        </div>

    );
}

export default Starbucks;