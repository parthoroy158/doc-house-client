import doctor from '../../../assets/doc.jpg'

const ViewDocBanner = () => {
    return (
        <div className='max-w-7xl mx-auto '> 
            <div
                className="hero h-150  bg-cover bg-center bg-no-repeat bg-fixed"
                style={{
                    backgroundImage:
                        `url(${doctor})`,
                }}
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-5xl font-bold flex justify-right ">Hello there</h1>
                        <p className="mb-5 max-w-1/2">
                            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                            quasi. In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">All Doctors</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDocBanner;