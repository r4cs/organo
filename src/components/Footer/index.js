import "./Footer.css"


const Footer = () => {

    return(
        <footer>

            <div className="footer-wrapper">
                <div className="social-media">
                    <img src="/images/fb.png" alt="click to enter in facebook"/>
                    <img src="/images/ig.png" alt="click to enter in instagram"/>
                    <img src="/images/tw.png" alt="click to enter in twitter"/>
                </div>

                <div className="logo">
                    <img src="/images/logo.png" alt="click to enter in twitter"/>
                </div>

                <div className="development">
                    <h6> Desenvolvido por R4CS </h6>
                </div>
            </div>


        </footer>
    )
}

export default Footer;