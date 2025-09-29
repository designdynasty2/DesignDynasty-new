import { InnerPageBanner } from "../InnerPageBanner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { commonWord } from "../../../assets/CommonWord";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { showError, showSuccess } from "../../../Custom/CustomToast";

export const ContactPage = () => {
  const schema = z.object({
    name: z
      .string()
      .min(3, "Name must be at least 3 characters")
      .max(20, "Name must be at most 20 characters")
      .trim(),
    email: z.string().email("Invalid email address").trim(),
    phone: z
      .string()
      .regex(
        /^[0-9+\-\s()]+$/,
        "Invalid phone number format"
      )
      .min(6, "Phone must be at least 6 digits")
      .max(20, "Phone must be at most 20 digits")
      .trim(),
    company: z
      .string()
      .min(3, "Company must be at least 3 characters")
      .max(50, "Company must be at most 50 characters")
      .trim(),
    service: z.string().min(1, "Please select a service").trim(),
    projectDetails: z
      .string()
      .min(5, "Project details must be at least 5 characters")
      .max(200, "Project details must be at most 200 characters")
      .trim(),
  });

  type FormData = z.infer<typeof schema>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const [loading,setLoading] = useState(false)
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (data: FormData) => {
    setLoading(true)
    if (!formRef.current) return;
    try {
      await emailjs.sendForm(
         "service_81eynuk",
        "designdyansty-mail",
        formRef.current,
        "jV-zfYIMPWGP_wD_c"
      );
      showSuccess("Message Send SuccessFully, We will contact you soon");
      setLoading(false)
      reset();
    } catch (err) {
      console.error(err);
      showError("Failed to send message");
      setLoading(false)
    }
    finally {
      setLoading(false)
    }
  };

  return (
    <>
      <InnerPageBanner />
      <section className="contact-page-section">
        <div className="container service-container w-container">
          <div className="section-title-center"></div>
          <div className="contact-page-wrapper">
            <div className="contact-page-info-block">
              <div className="contact-page-info-top-block">
                <h2 className="contact-page-info-title">
                  contact
                  <br />
                  information:
                </h2>
              </div>
              <div className="contact-information-block">
                <div className="single-contact-information">
                  <div className="contact-information-icon-block">
                    <div className="contact-information-icon w-embed">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_456_242)">
                          <path
                            d="M23.8995 4.10049C21.2553 1.45627 17.7395 0 14 0C10.2605 0 6.74472 1.45627 4.10049 4.10049C1.45627 6.74472 0 10.2605 0 14C0 17.7395 1.45627 21.2553 4.10049 23.8995C6.74472 26.5437 10.2605 28 14 28C17.7395 28 21.2553 26.5437 23.8995 23.8995C26.5437 21.2553 28 17.7395 28 14C28 10.2605 26.5437 6.74472 23.8995 4.10049ZM14.8128 26.332V24.654C14.8128 24.2009 14.4456 23.8337 13.9925 23.8337C13.5396 23.8337 13.1722 24.2009 13.1722 24.654V26.331C7.01303 25.9217 2.07428 20.9806 1.66861 14.8203H3.48889C3.94177 14.8203 4.3092 14.4531 4.3092 14C4.3092 13.5469 3.94177 13.1797 3.48889 13.1797H1.66861C2.07449 7.01453 7.02094 2.07043 13.1872 1.66797V3.40088C13.1872 3.85397 13.5544 4.22119 14.0075 4.22119C14.4604 4.22119 14.8278 3.85397 14.8278 3.40088V1.66904C20.987 2.07834 25.9257 7.01944 26.3314 13.1797H24.6425C24.1896 13.1797 23.8222 13.5469 23.8222 14C23.8222 14.4531 24.1896 14.8203 24.6425 14.8203H26.3314C25.9255 20.9855 20.9791 25.9296 14.8128 26.332Z"
                            fill="currentColor"
                          />
                          <path
                            d="M16.1306 15.1352C16.3117 14.7964 16.4149 14.4102 16.4149 14C16.4149 13.7231 16.3675 13.457 16.2812 13.2092L19.1982 10.2921C19.5184 9.97192 19.5184 9.45239 19.1982 9.13217C18.8777 8.81174 18.3584 8.81174 18.038 9.13217L15.2408 11.9294C14.8779 11.7112 14.4536 11.5854 14.0003 11.5854C12.669 11.5854 11.5859 12.6687 11.5859 14C11.5859 15.3313 12.669 16.4144 14.0003 16.4144C14.3224 16.4144 14.6299 16.3505 14.911 16.2356L20.6767 22.0013C20.8369 22.1615 21.0469 22.2416 21.2567 22.2416C21.4666 22.2416 21.6766 22.1615 21.8369 22.0013C22.1571 21.681 22.1571 21.1615 21.8369 20.8413L16.1306 15.1352ZM13.2263 14C13.2263 13.5732 13.5737 13.226 14.0003 13.226C14.4269 13.226 14.7743 13.5734 14.7743 14C14.7743 14.4266 14.4269 14.774 14.0003 14.774C13.5737 14.774 13.2263 14.4268 13.2263 14Z"
                            fill="currentColor"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_456_242">
                            <rect width="28" height="28" fill="currentColor" />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="contact-information-content">
                    <h3 className="contact-information-title">Hours</h3>
                    <p className="contact-information-text">
                      Monday - Friday: 8 AM - 5:30 PM
                      <br />
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>
                <div className="single-contact-information">
                  <div className="contact-information-icon-block">
                    <div className="contact-information-icon w-embed">
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20 4H4C2.897 4 2 4.897 2 6V18C2 19.103 2.897 20 4 20H20C21.103 20 22 19.103 22 18V6C22 4.897 21.103 4 20 4ZM20 6V6.511L12 12.511L4 6.511V6H20ZM4 18V9.489L12 15.489L20 9.489L20.002 18H4Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="contact-information-content">
                    <h3 className="contact-information-title">Email:</h3>
                    <Link
                      to={`mailto:${commonWord.email}`}
                      className="contact-information-text"
                      style={{ fontSize: "16px !important", color: "white" }}
                    >
                      {commonWord.email}
                    </Link>
                  </div>
                </div>
                <div className="single-contact-information">
                  <div className="contact-information-icon-block">
                    <div className="contact-information-icon w-embed">
                      <svg
                        width="27"
                        height="27"
                        viewBox="0 0 27 27"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.3384 16.7255C20.7856 16.15 20.1189 15.8423 19.4123 15.8423C18.7114 15.8423 18.0389 16.1443 17.4634 16.7198L15.6627 18.5149C15.5145 18.4351 15.3663 18.361 15.2239 18.2869C15.0187 18.1844 14.825 18.0875 14.6597 17.9849C12.973 16.9136 11.44 15.5174 9.96983 13.711C9.25751 12.8106 8.77883 12.0527 8.43122 11.2834C8.8985 10.856 9.33159 10.4116 9.75328 9.98417C9.91284 9.82461 10.0724 9.65935 10.232 9.4998C11.4287 8.3031 11.4287 6.7531 10.232 5.55641L8.67626 4.00071C8.4996 3.82406 8.31725 3.6417 8.1463 3.45935C7.80438 3.10604 7.44538 2.74133 7.07497 2.39942C6.52221 1.85236 5.86118 1.56174 5.16596 1.56174C4.47074 1.56174 3.79831 1.85236 3.22846 2.39942C3.22276 2.40512 3.22276 2.40512 3.21706 2.41082L1.27956 4.36542C0.550149 5.09483 0.134156 5.9838 0.0429799 7.01523C-0.0937849 8.67921 0.396289 10.2292 0.772392 11.2435C1.69555 13.7338 3.0746 16.0417 5.13177 18.5149C7.62773 21.4952 10.6309 23.8487 14.0614 25.507C15.372 26.1281 17.1215 26.8632 19.0761 26.9886C19.1958 26.9943 19.3211 27 19.4351 27C20.7515 27 21.857 26.527 22.7231 25.5868C22.7288 25.5754 22.7402 25.5697 22.7459 25.5583C23.0423 25.1993 23.3842 24.8744 23.7432 24.5268C23.9882 24.2932 24.239 24.0482 24.484 23.7917C25.0481 23.2048 25.3445 22.5209 25.3445 21.82C25.3445 21.1134 25.0424 20.4353 24.4669 19.8654L21.3384 16.7255ZM23.3785 22.7261C23.3728 22.7318 23.3728 22.7261 23.3785 22.7261C23.1562 22.9654 22.9283 23.182 22.6833 23.4213C22.3129 23.7746 21.9367 24.145 21.5834 24.561C21.0079 25.1765 20.3298 25.4671 19.4408 25.4671C19.3553 25.4671 19.2641 25.4671 19.1787 25.4614C17.4862 25.3531 15.9134 24.6921 14.7338 24.1279C11.5084 22.5665 8.67626 20.3498 6.32276 17.5404C4.37956 15.1983 3.0803 13.0329 2.21982 10.7079C1.68986 9.28895 1.49611 8.18343 1.58158 7.1406C1.63857 6.47387 1.895 5.92112 2.36798 5.44814L4.31118 3.50494C4.59041 3.2428 4.88673 3.10034 5.17736 3.10034C5.53637 3.10034 5.82699 3.31689 6.00935 3.49924C6.01504 3.50494 6.02074 3.51064 6.02644 3.51633C6.37405 3.84115 6.70457 4.17736 7.05218 4.53637C7.22883 4.71873 7.41118 4.90108 7.59354 5.08913L9.14924 6.64483C9.75328 7.24887 9.75328 7.80733 9.14924 8.41138C8.98398 8.57663 8.82442 8.74189 8.65916 8.90145C8.18049 9.39152 7.7246 9.84741 7.22883 10.2919C7.21743 10.3033 7.20604 10.309 7.20034 10.3204C6.71026 10.8105 6.80144 11.2891 6.90402 11.614C6.90971 11.631 6.91541 11.6481 6.92111 11.6652C7.32571 12.6454 7.89556 13.5686 8.76174 14.6684L8.76744 14.6741C10.3402 16.6116 11.9985 18.1217 13.8277 19.2785C14.0614 19.4266 14.3007 19.5463 14.5287 19.6603C14.7338 19.7629 14.9276 19.8597 15.0928 19.9623C15.1156 19.9737 15.1384 19.9908 15.1612 20.0022C15.3549 20.0991 15.5373 20.1447 15.7253 20.1447C16.1983 20.1447 16.4946 19.8483 16.5915 19.7515L18.5404 17.8026C18.7342 17.6088 19.0419 17.3752 19.4009 17.3752C19.7542 17.3752 20.0448 17.5974 20.2215 17.7912C20.2272 17.7969 20.2272 17.7969 20.2329 17.8026L23.3728 20.9425C23.9597 21.5237 23.9597 22.1221 23.3785 22.7261Z"
                          fill="white"
                        />
                        <path
                          d="M14.5922 6.42259C16.0852 6.67332 17.4415 7.37994 18.5242 8.46266C19.6069 9.54538 20.3078 10.9016 20.5643 12.3947C20.627 12.7708 20.9518 13.0329 21.3222 13.0329C21.3678 13.0329 21.4077 13.0272 21.4533 13.0215C21.8749 12.9531 22.1542 12.5542 22.0858 12.1325C21.7781 10.3261 20.9233 8.67921 19.6183 7.37424C18.3134 6.06928 16.6665 5.2145 14.8601 4.90678C14.4384 4.83839 14.0452 5.11762 13.9711 5.53361C13.897 5.94961 14.1705 6.3542 14.5922 6.42259Z"
                          fill="white"
                        />
                        <path
                          d="M26.9679 11.9103C26.4607 8.93564 25.0589 6.22884 22.9048 4.07479C20.7508 1.92075 18.044 0.518906 15.0693 0.0117361C14.6534 -0.0623449 14.2602 0.222582 14.1861 0.638575C14.1177 1.06027 14.3969 1.45347 14.8186 1.52755C17.4741 1.97773 19.896 3.23711 21.8221 5.15751C23.7482 7.08362 25.0019 9.5055 25.4521 12.161C25.5148 12.5371 25.8396 12.7992 26.21 12.7992C26.2556 12.7992 26.2955 12.7936 26.3411 12.7879C26.757 12.7252 27.042 12.3263 26.9679 11.9103Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="contact-information-content">
                    <h3 className="contact-information-title">Call Us:</h3>
                    <Link
                      to={`tel:${commonWord.contact}`}
                      className="contact-information-text"
                      style={{ fontSize: "16px !important", color: "white" }}
                    >
                      {commonWord.contact}
                    </Link>
                  </div>
                </div>
                <div className="single-contact-information">
                  <div className="contact-information-icon-block">
                    <div className="contact-information-icon w-embed">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M22.3747 3.46862C20.138 1.23184 17.164 0 14.0008 0C10.8376 0 7.86354 1.23184 5.62682 3.46862C3.39004 5.70545 2.1582 8.67936 2.1582 11.8425C2.1582 18.2417 8.20873 23.5641 11.4593 26.4235C11.911 26.8209 12.3011 27.164 12.6119 27.4543C13.0013 27.8181 13.5011 27.9999 14.0008 27.9999C14.5005 27.9999 15.0002 27.8181 15.3897 27.4543C15.7004 27.164 16.0905 26.8209 16.5422 26.4235C19.7928 23.5641 25.8434 18.2417 25.8434 11.8425C25.8433 8.67936 24.6115 5.70545 22.3747 3.46862ZM15.4589 25.1921C14.9973 25.5981 14.5986 25.9488 14.27 26.2558C14.119 26.3967 13.8825 26.3968 13.7315 26.2558C13.4029 25.9487 13.0042 25.5981 12.5426 25.192C9.48662 22.5038 3.79828 17.5 3.79828 11.8426C3.79828 6.217 8.37504 1.64025 14.0007 1.64025C19.6263 1.64025 24.2031 6.217 24.2031 11.8426C24.2031 17.5 18.5148 22.5038 15.4589 25.1921Z"
                          fill="currentColor"
                        />
                        <path
                          d="M14.0001 6.17631C11.1224 6.17631 8.78125 8.51743 8.78125 11.3951C8.78125 14.2729 11.1224 16.614 14.0001 16.614C16.8779 16.614 19.219 14.2729 19.219 11.3951C19.219 8.51743 16.8779 6.17631 14.0001 6.17631ZM14.0001 14.9737C12.0269 14.9737 10.4214 13.3683 10.4214 11.3951C10.4214 9.42186 12.0269 7.81645 14.0001 7.81645C15.9734 7.81645 17.5788 9.42186 17.5788 11.3951C17.5788 13.3683 15.9734 14.9737 14.0001 14.9737Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="contact-information-content">
                    <h3 className="contact-information-title">Location:</h3>
                    <p className="contact-information-text">
                      {commonWord.address}
                    </p>
                  </div>
                </div>
                <div className="single-contact-information">
                  <div className="contact-information-icon-block">
                    <div className="contact-information-icon w-embed">
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="contact-information-content">
                    <h3 className="contact-information-title">Support:</h3>
                    <p className="contact-information-text">
                      24/7 Customer Support
                      <br />
                      Always here to help you
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-page-form-block">
              <div className="contact-form-inner">
                <div className="contact-form-block">
                  <div className="form-block-wrapper w-form">
                    <form
                      id="email-form"
                      name="email-form"
                      ref={formRef}
                      onSubmit={handleSubmit(onSubmit)}
                      className="form-block-inner"
                      style={{ display: "flex", flexDirection: "column" }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        className="formResponsive"
                      >
                        <div className="single-form-block">
                          <input
                            className="form-field w-input"
                            placeholder="Your Name :"
                            type="text"
                            id="Name"
                            {...register("name")}
                          />
                          {errors.name && (
                            <span className="error-message">
                              {errors.name.message}
                            </span>
                          )}
                        </div>
                        <div className="single-form-block">
                          <input
                            className="form-field w-input"
                            placeholder="Email :"
                            type="email"
                            id="Email"
                            {...register("email")}
                          />
                          {errors.email && (
                            <span className="error-message">
                              {errors.email.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                        className="formResponsive"
                      >
                        <div className="single-form-block">
                          <input
                            className="form-field w-input"
                            placeholder="Phone :"
                            type="tel"
                            id="Phone"
                            {...register("phone")}
                          />
                          {errors.phone && (
                            <span className="error-message">
                              {errors.phone.message}
                            </span>
                          )}
                        </div>
                        <div className="single-form-block">
                          <input
                            className="form-field w-input"
                            placeholder="Company :"
                            type="text"
                            id="Company"
                            {...register("company")}
                          />
                          {errors.company && (
                            <span className="error-message">
                              {errors.company.message}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="single-form-block">
                        <select
                          className="form-field w-input"
                          id="Service"
                          {...register("service")}
                        >
                          <option value="">Select Service</option>
                          <option value="web development">
                            Web Development
                          </option>
                          <option value="mobile development">Mobile Developement</option>
                          <option value="graphic design">Graphic Design</option>
                        </select>
                        {errors.service && (
                          <span className="error-message">
                            {errors.service.message}
                          </span>
                        )}
                      </div>
                      <div className="single-form-block">
                        <textarea
                          placeholder="Project Details :"
                          id="projectDetails"
                          className="form-field textarea w-input"
                          {...register("projectDetails")}
                        ></textarea>
                        {errors.projectDetails && (
                          <span className="error-message">
                            {errors.projectDetails.message}
                          </span>
                        )}
                      </div>
                      {/* <div className="single-form-block">
                        <input
                          className="form-field w-input"
                          placeholder="Attachments (optional)"
                          type="file"
                          id="Attachments"
                          {...register("attachments")}
                        />
                        {errors.attachments && (
                          <span className="error-message">
                            {errors.attachments.message as string}
                          </span>
                        )}
                      </div> */}
                      <input
                        type="submit"
                        className="button-primary contact-button w-button"
                        value={loading ? "Sending..." : "Send Message"}
                        disabled={loading}
                      />
                    </form>
                    <div className="w-form-done">
                      <div>Thank you! Your submission has been received!</div>
                    </div>
                    <div className="w-form-fail">
                      <div>
                        Oops! Something went wrong while submitting the form.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
