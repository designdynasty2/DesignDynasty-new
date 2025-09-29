import { Box, Typography } from "@mui/material";
import {
  LoginPage,
  LoginPagebottomText,
  LoginPageLeft,
  LoginPageRight,
} from "../assets/Styles/LoginStyle";
import { images } from "../assets/Images/Images";
import { CustomInput } from "../Custom/CustomInput";
import CustomButton from "../Custom/CustomButton";
import { useForm } from "react-hook-form";
import {  signUpSchema } from "../assets/Validation/Schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(signUpSchema),
  });
  const navigate = useNavigate();
  const onsubmit = async (data: { email: string }) => {
    console.log(data);
    navigate("/signup-confirm");
    reset();
  };
  return (
    <>
      <Box sx={{ ...LoginPage,background:"white" }}>
        <Box sx={{ ...LoginPageLeft }}>
          <Typography variant="h2">SignUp</Typography>
          <Typography component={"p"}>
            Enter your registered email address and we’ll send you a link to
            Sign Up
          </Typography>
          <Box
            component={"form"}
            sx={{ mt: 3 }}
            onSubmit={handleSubmit(onsubmit)}
          >
            <CustomInput
              label="Email"
              required
              placeholder="Enter your email"
              type="text"
              name="email"
              register={register}
              errors={errors}
              boxSx={{ mb: 2 }}
            />
            <CustomInput
              label="UserName"
              required
              placeholder="Enter your Name"
              type="text"
              name="username"
              register={register}
              errors={errors}
              boxSx={{ mb: 2 }}
            />
            <CustomButton
              type="submit"
              variant="contained"
              label="Sign Up"
              size="large"
            />
          </Box>
          <Typography sx={{ ...LoginPagebottomText }}>
            Take me back to..
            <Box
              component={"span"}
              onClick={() => {
                navigate("/login");
              }}
            >
              {" "}
              Login
            </Box>
          </Typography>
        </Box>
        <Box sx={{ ...LoginPageRight }}>
          <Box
            component={"img"}
            src={images.loginLeft}
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </Box>
      </Box>
    </>
  );
};
