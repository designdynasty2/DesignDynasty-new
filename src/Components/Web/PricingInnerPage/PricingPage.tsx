import { InnerPageBanner } from "../InnerPageBanner";
import { useState } from "react";
import { Box } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { WebContact } from "../HomeInnerPage/WebContact";

type PricingKey =
  | "mobile-development"
  | "graphic-design"
  | "website-development"
  | "ecommerce";

const allPricingPlans = {
  "mobile-development": [
    {
      name: "Starter",
      price: "$599",
      period: "/project",
      description: "Perfect for small mobile app startups",
      features: [
        "Basic UI/UX design",
        "Android & iOS support",
        "Up to 5 screens",
        "Basic animations",
        "Push notifications",
        "1 month support",
      ],
      notIncluded: [
        "Custom backend",
        "Advanced analytics",
        "App Store publishing",
      ],
      isPopular: false,
      buttonText: "Get Started",
      color: "border-gray-200",
    },
    {
      name: "Business",
      price: "$999",
      period: "/project",
      description: "Popular choice for growing apps",
      features: [
        "Custom app functionality",
        "Database integration",
        "6-10 screens",
        "Push notifications & analytics",
        "Payment gateway integration",
        "6 months support",
      ],
      notIncluded: ["Unlimited revisions", "Dedicated account manager"],
      isPopular: true,
      buttonText: "Get Started",
      color: "border-orange",
    },
    {
      name: "Enterprise",
      price: "$1599",
      period: "/project",
      description: "Full-scale mobile solution",
      features: [
        "Unlimited screens",
        "Custom backend & API",
        "Push notifications & analytics",
        "Advanced security",
        "Dedicated support",
        "12 months support",
      ],
      notIncluded: [],
      isPopular: false,
      buttonText: "Contact Sales",
      color: "border-gray-200",
    },
  ],
  "graphic-design": [
    {
      name: "Starter",
      price: "$299",
      period: "/project",
      description: "Basic design packages for startups",
      features: [
        "Logo design",
        "Business card & stationery",
        "Social media graphics",
        "3 initial concepts",
        "1 month support",
      ],
      notIncluded: ["Brand strategy", "Animation", "Website design"],
      isPopular: false,
      buttonText: "Get Started",
      color: "border-gray-200",
    },
    {
      name: "Business",
      price: "$599",
      period: "/project",
      description: "Complete branding and design solutions",
      features: [
        "Logo & brand identity",
        "Marketing materials",
        "Social media branding",
        "Custom illustrations",
        "6 months support",
      ],
      notIncluded: ["Animated videos", "Full website design"],
      isPopular: true,
      buttonText: "Get Started",
      color: "border-orange",
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/project",
      description: "Comprehensive design and branding",
      features: [
        "Full brand strategy",
        "Logo & visual identity",
        "Marketing & social graphics",
        "Custom illustrations & infographics",
        "Dedicated designer & 12 months support",
      ],
      notIncluded: [],
      isPopular: false,
      buttonText: "Contact Sales",
      color: "border-gray-200",
    },
  ],
  "website-development": [
    {
      name: "Starter",
      price: "$499",
      period: "/project",
      description: "Perfect for simple business websites",
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Basic SEO",
        "Contact form",
        "1 month support",
      ],
      notIncluded: ["Custom backend", "E-commerce", "Advanced SEO"],
      isPopular: false,
      buttonText: "Get Started",
      color: "border-gray-200",
    },
    {
      name: "Business",
      price: "$999",
      period: "/project",
      description: "Full-featured business website",
      features: [
        "Up to 15 pages",
        "Custom design & CMS",
        "SEO optimized",
        "Blog & content integration",
        "6 months support",
      ],
      notIncluded: ["E-commerce", "Dedicated account manager"],
      isPopular: true,
      buttonText: "Get Started",
      color: "border-orange",
    },
    {
      name: "Enterprise",
      price: "$1499",
      period: "/project",
      description: "Enterprise-grade website with custom features",
      features: [
        "Unlimited pages",
        "Custom CMS or backend",
        "Advanced SEO & analytics",
        "Dedicated support & training",
        "12 months support",
      ],
      notIncluded: [],
      isPopular: false,
      buttonText: "Contact Sales",
      color: "border-gray-200",
    },
  ],
  ecommerce: [
    {
      name: "Starter",
      price: "$699",
      period: "/project",
      description: "Basic online store setup",
      features: [
        "Up to 50 products",
        "Payment gateway integration",
        "Basic theme customization",
        "Responsive design",
        "1 month support",
      ],
      notIncluded: [
        "Custom features",
        "Advanced analytics",
        "Marketing automation",
      ],
      isPopular: false,
      buttonText: "Get Started",
      color: "border-gray-200",
    },
    {
      name: "Business",
      price: "$1299",
      period: "/project",
      description: "Advanced e-commerce solution",
      features: [
        "Up to 500 products",
        "Custom design",
        "Inventory & order management",
        "Payment & shipping integrations",
        "6 months support",
      ],
      notIncluded: ["Dedicated account manager"],
      isPopular: true,
      buttonText: "Get Started",
      color: "border-orange",
    },
    {
      name: "Enterprise",
      price: "$2499",
      period: "/project",
      description: "Full-scale enterprise e-commerce",
      features: [
        "Unlimited products",
        "Custom backend & API",
        "Advanced analytics",
        "Marketing & automation tools",
        "Dedicated support team",
        "12 months support",
      ],
      notIncluded: [],
      isPopular: false,
      buttonText: "Contact Sales",
      color: "border-gray-200",
    },
  ],
};

export const PricingPage = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs: { key: PricingKey; label: string }[] = [
    { key: "mobile-development", label: "Mobile Development" },
    { key: "graphic-design", label: "Graphic Design" },
    { key: "website-development", label: "Website Development" },
    { key: "ecommerce", label: "E-commerce" },
  ];

  const activePlans = allPricingPlans[tabs[activeTab].key];

  return (
    <>
      <InnerPageBanner />
      <div className="pricing-section service-section">
        <div className="container w-container">
          <Box
            sx={{
              mb: 4,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexWrap: "wrap",
                gap: { xs: 1, md: 2 },
                p: 1,
                bgcolor: "var(--background)",
                borderRadius: 2,
                border: `1px solid var(--border-light)`,
                justifyContent: "center",
              }}
            >
              {tabs.map((tab, index) => (
                <Box
                  key={tab.key}
                  component="button"
                  onClick={() => setActiveTab(index)}
                  sx={{
                    padding: { xs: "10px 16px", md: "12px 24px" },
                    borderRadius: "8px",
                    border: "none",
                    backgroundColor:
                      activeTab === index
                        ? "var(--coral-primary-color)"
                        : "transparent",
                    color:
                      activeTab === index
                        ? "var(--white)"
                        : "var(--text-primary)",
                    fontFamily: "Syne",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    fontSize: { xs: "14px", md: "16px" },
                    minWidth: { xs: "120px", md: "auto" },
                    "&:hover": {
                      backgroundColor:
                        activeTab === index
                          ? "var(--coral-primary-color)"
                          : "var(--backgroundInner)",
                    },
                  }}
                >
                  {tab.label}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Pricing Cards */}
          <div
            className="pricing-cards-wrapper"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              marginTop: "40px",
            }}
          >
            {activePlans.map((plan: any, index: any) => (
              <div
                key={index}
                className="pricing-card"
                style={{
                  position: "relative",
                  backgroundColor: "var(--white)",
                  borderRadius: "12px",
                  boxShadow: plan.isPopular
                    ? "0 10px 30px rgba(255, 116, 37, 0.2)"
                    : "0 4px 20px rgba(0, 0, 0, 0.08)",
                  border: plan.isPopular
                    ? "2px solid var(--coral-primary-color)"
                    : "1px solid var(--border)",
                  padding: "30px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                }}
              >
                {plan.isPopular && (
                  <div
                    className="popular-badge"
                    style={{
                      position: "absolute",
                      top: "-15px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      backgroundColor: "var(--coral-primary-color)",
                      color: "var(--white)",
                      padding: "8px 16px",
                      borderRadius: "20px",
                      fontSize: "12px",
                      fontWeight: "bold",
                      fontFamily: "Syne",
                      textTransform: "uppercase",
                      letterSpacing: "0.5px",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <h3
                  style={{
                    fontFamily: "Syne",
                    fontSize: "24px",
                    fontWeight: "bold",
                    color: "var(--heading-black)",
                    marginBottom: "15px",
                  }}
                >
                  {plan.name}
                </h3>

                <div
                  style={{
                    marginBottom: "15px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "Syne",
                      fontSize: "36px",
                      fontWeight: "bold",
                      color: "var(--coral-primary-color)",
                    }}
                  >
                    {plan.price}
                  </span>
                  <span
                    style={{
                      fontFamily: "Syne",
                      fontSize: "16px",
                      color: "var(--text-secondary)",
                      marginLeft: "5px",
                    }}
                  >
                    {plan.period}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "Syne",
                    fontSize: "14px",
                    color: "var(--text-secondary)",
                    marginBottom: "25px",
                    lineHeight: "1.5",
                  }}
                >
                  {plan.description}
                </p>

                <div style={{ marginBottom: "25px" }}>
                  {plan.features.map((feature: any, idx: any) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                        justifyContent: "center",
                      }}
                    >
                      <CheckIcon
                        sx={{
                          color: "var(--success)",
                          mr: 1,
                          fontSize: "18px",
                        }}
                      />
                      <span
                        style={{
                          fontFamily: "Syne",
                          fontSize: "14px",
                          color: "var(--text-primary)",
                        }}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {plan.notIncluded.length > 0 && (
                  <div style={{ marginBottom: "25px" }}>
                    <h4
                      style={{
                        fontFamily: "Syne",
                        fontSize: "14px",
                        fontWeight: "bold",
                        color: "var(--text-secondary)",
                        marginBottom: "10px",
                      }}
                    >
                      Not Included:
                    </h4>
                    {plan.notIncluded.map((item: any, idx: any) => (
                      <div
                        key={idx}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "5px",
                          justifyContent: "center",
                        }}
                      >
                        <CloseIcon
                          sx={{
                            color: "var(--text-secondary-dark)",
                            mr: 1,
                            fontSize: "16px",
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "Syne",
                            fontSize: "12px",
                            color: "var(--text-secondary-dark)",
                          }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                )}

                <button
                  className={plan.isPopular ? "button-primary" : ""}
                  style={{
                    width: "100%",
                    padding: plan.isPopular ? "16px 24px" : "14px 24px",
                    borderRadius: "8px",
                    border: plan.isPopular
                      ? "none"
                      : `2px solid var(--coral-primary-color)`,
                    backgroundColor: plan.isPopular
                      ? "var(--coral-primary-color)"
                      : "transparent",
                    color: plan.isPopular
                      ? "var(--white)"
                      : "var(--coral-primary-color)",
                    fontFamily: "Syne",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    textTransform: "capitalize",
                  }}
                  onMouseEnter={(e) => {
                    if (!plan.isPopular) {
                      (e.target as HTMLElement).style.backgroundColor =
                        "var(--coral-primary-color)";
                      (e.target as HTMLElement).style.color = "var(--white)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.isPopular) {
                      (e.target as HTMLElement).style.backgroundColor =
                        "transparent";
                      (e.target as HTMLElement).style.color =
                        "var(--coral-primary-color)";
                    }
                  }}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <WebContact />
    </>
  );
};
