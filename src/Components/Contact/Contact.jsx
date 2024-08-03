import "./Contact.css";
import mail from "../../assets/mail.png";
import phone from "../../assets/phone.png";
import location from "../../assets/location.png"
import linkedin from "../../assets/linkedin.png";
import github from "../../assets/github-logo.png";


export const Contact = () => {

    const gotolinkedin= () => {
        window.open("https://www.linkedin.com/in/geeth-chand-yanamadala-5517b5201/");
    };
    const gotogithub= () => {
        window.open("https://github.com/geeth-chand/");
    };

    const onSubmit = async (event) => {
        console.log("yes");
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a5153b4a-5578-4774-97c0-0d29cc12fcc9");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          console.log("Success", res);
        }
      };

    return (
        <div id="contact" className="contact">
            <div className="contact-title">
                <h1><span>Get</span> in touch</h1>
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's Talk</h1>
                    <p>I am currently seeking new job opportunities and would like to connect. 
                       Feel free to reach out to me anytime for potential inquiries.</p>
                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail} alt=""/> <p>geethchand49@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                        <img src={phone} alt=""/> <p>+91 63056 05510</p>
                        </div>
                        <div className="contact-detail">
                        <img src={location} alt=""/> <p>Hyderabad, India</p>
                        </div>
                        <div className="contact-detail2">
                        <div onClick={gotolinkedin} className="detail2-linkedin"><img src={linkedin} alt=""/> <p>LinkedIn</p></div>
                         <div onClick={gotogithub} className="detail2-github"><img src={github} alt=""/> <p>GitHub</p></div>
                        </div>
                    </div>
                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder="Enter your Name" />
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder="Enter your Email" />
                    <label htmlFor="">Write your message here</label>
                    <textarea placeholder="Enter your message" rows="6"/>
                    <button className="contact-submit" type="submit">Submit now</button>
                </form>
            </div>
        </div>
    );
}