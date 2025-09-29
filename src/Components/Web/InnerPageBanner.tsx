import { useLocation } from "react-router-dom";

export const InnerPageBanner = () => {
  const location = useLocation();

  const getBannerContent = () => {
    switch (location.pathname) {
      case "/contact":
        return {
          mainText: "Contact",
          highlightText: " Us",
        };
      case "/pricing":
        return {
          mainText: "Pricing",
          highlightText: "",
        };
      case "/about":
        return {
          mainText: "About",
          highlightText: " Us",
        };
      case "/web-development":
        return {
          mainText: "Web",
          highlightText: " Development",
        };
      case "/graphic-design":
        return {
          mainText: "Graphic",
          highlightText: " Design",
        };
      case "/mobile-developement":
        return {
          mainText: "Mobile",
          highlightText: " Development",
        };
      case "/services":
        return {
          mainText: "Services",
        };
      default:
        return {
          mainText: "Welcome",
          highlightText: "",
        };
    }
  };

  const { mainText, highlightText } = getBannerContent();

  return (
    <>
      <section className="breadcrumb-section">
        <div className="w-layout-blockcontainer container w-container">
          <div className="breadcrumb-wrapper">
            <div className="breadcrumb-title-block">
              <h1
                className="breadcrumb-title bannerInnerPageTitle"
                style={{
                  fontSize: "100px",
                  fontWeight: 600,
                }}
              >
                {mainText}
                {highlightText && (
                  <span
                    style={{
                      WebkitTextFillColor: "transparent",
                      WebkitTextStrokeWidth: "2px",
                      WebkitTextStrokeColor: "var(--coral-primary-color)",
                    }}
                  >
                    {highlightText}
                  </span>
                )}
              </h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
