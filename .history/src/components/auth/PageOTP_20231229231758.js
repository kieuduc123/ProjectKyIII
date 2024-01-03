import React, { useEffect,  useState } from "react";
import { useNavigate } from "react-router-dom";
import FormGroup from "components/layout/FormGroup";
import { Label } from "components/label";
import { Input } from "components/input";
import { Button } from "components/button";
import { toast } from "react-toastify";
import { sendUserOtp } from "sever/service";


const PageOTP = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [otp, setOtp] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [waitingTime,setWaitingTime] = useState(60);
  const  [sentBack,setSentBack] = useState(false);
  
  
  // useEffect(() => {
  //   setEmail(localStorage.getItem("emailOTp") || " ");
  // }, []);
  useEffect(() => {
    setEmail(localStorage.getItem("emailOTp") || " ");
    
    let intervalId ;
    if(waitingTime <= 60 && waitingTime >= 0) {
     intervalId =   setInterval(() => {
     setWaitingTime((prevWaitingTime) => prevWaitingTime - 1);
      },1000);
    }
    else {
      setSentBack(true);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [waitingTime]);
  // Thực hiện một lần khi component được tạo
  //gửi otp
  const handleLoginOtp = async (e) => {
    e.preventDefault();
    const query = {
      email,
      otp,
    };
    console.log(query);
    try {
      const res = await sendUserOtp(query);
      if (res?.data) {
        console.log(res);
        toast.success("Thành công");
        navigate("/login");
        setLoading(false);
      }
      else if (error.res?.status === 400) {
        // Handle 400 Bad Request error (possibly due to empty fields)
        toast.error('Please fill in all required fields.');
      }
   else {
        setError("Invalid OTP. Please try again."); // Đặt thông báo lỗi nếu OTP không hợp lệ
      }

    } catch (error) {
      setError(`Error: ${error.message}`);
      toast.error(`Error: ${error.message}`);
    }
    
  };

// gửi lại otp 
const handleSendOtp = async (e) => {
  e.preventDefault();
  const query = {
    email,
  };
  try {
    const res = await sendUserOtp(query);
    if (res?.data) {
      setSentBack(false);
      setWaitingTime(60);
      toast.success("Xin Moi Check Email");
      console.log(res);
    } else {
      setError("Failed to send OTP. Please try again."); // Đặt thông báo lỗi nếu gửi OTP thất bại
    }
  } catch (error) {
    setError(`Error: ${error.message}`);
  }
};
  return (
    <section className="mt-0 overflow-hidden  vh-100 d-flex justify-content-center align-items-center p-4">
      {/* <!-- Page Content Goes Here --> */}

      {/* <!-- Login Form--> */}
      <div className="col col-md-8 col-lg-6 col-xxl-5">
        <span className="text-muted text-center d-block fw-bolder my-4 fs-1 tex">
          OTP
        </span>
        <form onSubmit={handleLoginOtp}>
          <div className="visually-hidden d-none">
            <Label htmlFor="email">Email</Label>
            <Input
              // control={control}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              name="email"
              placeholder="name@email.com"></Input>
            {/* <p className='text-danger mt-3'>{errors.email?.message}</p> */}
          </div>
          <FormGroup>
          
            <Input
              onChange={(e) => setOtp(e.target.value)}
              name="otp"
              placeholder="0 0 0 0 0"></Input>
          </FormGroup>
          {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {error && <p className="text-danger">{error}</p>}
            <Button type="submit">Submit OTP</Button>
          </>
        )}
        </form>
          {!sentBack ? (
                    <div className="flex flex-col gap-1 w-full h-full ">
                        <p className="flex gap-2 items-center text-dark text-sm">
                            Gửi lại mã sau
                            <span className="text-base text-dark "> {waitingTime} s</span>
                        </p>
                        <p className="text-sm  text-dark ">Mã xác minh có hiệu lực trong 3 phút</p>
                    </div>
                ) : (
                    <div className="flex flex-col gap-1 w-full h-full ">
                        <p className="flex gap-2 
                        items-center text-dark text-sm">
                            Không nhận được?
                            <span className="text-sm 
                            btn  bg-secondary text-white  ml-2 border-none " onClick={handleSendOtp}>
                                Gửi lại mã
                            </span>
                        </p>
                    </div>
                )}
        {/* <p className="d-block text-center text-muted">
        You have not received the otp code ?{" "}
     
          <button className="bg-dark text-white border-0" onClick={handleSendOtp}>
          SEND TO 
          </button>
        </p> */}

      </div>
      {/* </div> */}
      {/* <!-- / Login Form--> */}

      {/* <!-- /Page Content --> */}
    </section>
  );
};

export default PageOTP;
