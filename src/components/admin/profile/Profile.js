import React, { useState, useRef, useEffect } from "react";
import DashboardLayout from "../../../containers/layouts/dashboard";
import "./Profile.css";
import backgroundDef from "./../../../containers/Resources/banner.png";
import logoDef from "./../../../containers/Resources/1dictyIwg9.png";
import axios from "axios";

const Profile = ({ config, user, shop, markets, token }) => {
  const coverImageRef = useRef(null);
  const logoImageRef = useRef(null);

  const [shopId, setShopId] = useState('');
  const [marketId, setMarketId] = useState('');
  const [shopName, setShopName] = useState('');
  const [shopAddress, setShopAddress] = useState('');
  const [shopEmail, setShopEmail] = useState('');
  const [shopPhone, setShopPhone] = useState('');
  const [facebookHandle, setFacebookHandle] = useState('');
  const [twitterHandle, setTwitterHandle] = useState('');
  const [instagramHandle, setInstagramHandle] = useState('');
  const [logo, setLogo] = useState('');
  const [banner, setBanner] = useState('');

  const [showLogoButton, setShowLogoButton] = useState(false);
  const [showCoverUploadButton, setShowCoverUploadButton] = useState(false);
  const [coverImage, setCoverImage] = useState(''); 
  const [logoImage, setLogoImage] = useState('');
  const [coverImageUploading, setCoverImageUploading] = useState(false);
  const [logoImageUploading, setLogoImageUploading] = useState(false);
  const [message, setMessage] = useState({ type: "", message: "" });

  useEffect(() => {  
    setShopId(shop.id);
    setMarketId(shop.market_id);
    setShopName(shop.name);
    setShopAddress(shop.address);
    setShopEmail(shop.email);
    setShopPhone(shop.phone_number);
    setFacebookHandle(shop.facebook_handle);
    setTwitterHandle(shop.twitter_handle);
    setInstagramHandle(shop.instagram_handle);
    setLogo(shop.logo);
    setLogoImage(shop.logo);
    setBanner(shop.banner_image);
    setCoverImage(shop.banner_image);
  }, [shop]);

  const selectCoverImage = (e) => {
    e.preventDefault();
    coverImageRef.current.click();
  };

  const onCoverFileSelected = (e) => {
    e.preventDefault();
    // console.log("onCoverFileSelected:", coverImageRef);
    const selectedCoverImage = coverImageRef.current.files[0];
    const imageFile = URL.createObjectURL(selectedCoverImage);
    setCoverImage(imageFile);
    setBanner(selectedCoverImage);

    setShowCoverUploadButton(true);
  };

  const selectLogoImage = (e) => {
    e.preventDefault();
    logoImageRef.current.click();
  };

  const onLogoFileSelected = (e) => {
    e.preventDefault();
    // console.log("onLogoFileSelected:", logoImageRef.current.files);
    const selectedLogoImage = logoImageRef.current.files[0];
    const logoFile = URL.createObjectURL(selectedLogoImage);
    setLogoImage(logoFile);
    setLogo(selectedLogoImage);
    setShowLogoButton(true);
  };

  const onUploadCoverImage = async (e) => {
    e.preventDefault();

    try {
      setCoverImageUploading(true);
      const formData = new FormData();
      formData.append("banner_image", banner);
      formData.append("shop_id", shopId);

      const res = await axios.post("/api/uploadCoverImage", formData, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        onUploadProgress: progressEvent => {
          let progress = Math.floor(progressEvent.loaded / progressEvent.total * 100);
          console.log('progress:', progress + '%');
          if(progress < 100){
            setCoverImageUploading(true);
          }else{
            setCoverImageUploading(false);
          }

        }
      });

      setCoverImageUploading(false);
      setMessage({type: 'success', message: res.data.message});
      //set Shop cover image to current
      setBanner(res.data.banner_url);
      setShowCoverUploadButton(false);
    } catch (err) {
      //handle error
    }
  };

  const onCancelUploadCoverImage = (e) => {
    e.preventDefault();
    setCoverImage(backgroundDef);
    setShowCoverUploadButton(false);
  };

  const onCancelUploadLogoImage = (e) => {
    e.preventDefault();

    setLogoImage(logoDef);
    setShowLogoButton(false);
  };

  const onUploadLogoImage = async (e) => {
    e.preventDefault();

    try {
      setLogoImageUploading(true);
      const formData = new FormData();
      formData.append("logo", logo);
      formData.append("shop_id", shopId);
      const res = await axios.post("/api/uploadLogoImage", formData, {
        headers: {
          "Authorization": `Bearer ${token}`,
        },
        onUploadProgress: progressEvent => {
          let progress = Math.floor(progressEvent.loaded / progressEvent.total * 100)
          console.log(progress);
          if(progress < 100){
            setLogoImageUploading(true);
          }else{
            setLogoImageUploading(false);
          }
        }
      });
      setLogoImageUploading(false);
      setMessage({type: 'success', message: res.data.message});
      //set logo image to the current
      setLogo(res.data.logo_url);
      setShowLogoButton(false);
    } catch (err) {
      //handle error
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(
      "Shop information:",
      shopName,
      shopAddress,
      shopEmail,
      shopPhone,
      facebookHandle,
      twitterHandle,
      instagramHandle
    );

    try {
      const res = await axios.put(
        `/api/shops/${shopId}`,
        {
          market_id: marketId,
          user_id: user.id,
          name: shopName,
          address: shopAddress,
          email: shopEmail,
          phone_number: shopPhone,
          facebook_handle: facebookHandle,
          twitter_handle: twitterHandle,
          instagram_handle: instagramHandle,
        }, 
        config
      );
      setMessage({ type: "success", message: res.data.message });
    } catch (err) {
      //handle error
    }
  };

  return (
    <DashboardLayout shop={shop} user={user} title="Profile">
      <div className="content">
        <div className="content-header">
          {message && message.message !== "" && (
            <div className={"alert alert-" + message.type}>
              {message.message}
            </div>
          )}
        </div>
        <div className="content-body">
          <div className="">
            <div
              className="shop-cover"
              style={{ 
                backgroundImage: `url(${coverImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "relative",
              }}
            >
              <div
                className="background-overlay"
                style={{
                  position: "absolute",
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "rgba(0, 0, 0, .6)",
                }}
              >
                <div className="cover-control d-flex justify-content-end">
                  {showCoverUploadButton ? (
                    <div className="btn-group">
                      <button
                        className="btn btn-success btn-sm"
                        onClick={onUploadCoverImage}
                      >
                        Upload Cover Image
                      </button>
                      <button
                        className="btn btn-info btn-sm"
                        onClick={onCancelUploadCoverImage}
                      >
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button
                      className="btn btn-info btn-sm"
                      onClick={selectCoverImage}
                    >
                      Select shop cover image
                    </button>
                  )}
                  <input
                    type="file"
                    id="cover image"
                    accept="images/*"
                    ref={coverImageRef}
                    className="hide"
                    onChange={onCoverFileSelected}
                  />
                </div> 
                <div className="shop-title-container"> 
                  <h2 className="shop-title">{shop.name}</h2>
                </div>
                <div className="shop-logo-container">
                  <div className="shop-logo">
                    <img
                      src={logoImage}
                      alt="shop logo"
                      className="img-responsive rounded-circle"
                      onClick={selectLogoImage}
                    />
                  </div>
                  <input
                    type="file"
                    ref={logoImageRef}
                    onChange={onLogoFileSelected}
                    className="hide"
                  />
                  <div className="upload-btn-container">
                    {showLogoButton && (
                      <div className="btn-group">
                        <button
                          className="btn btn-primary"
                          onClick={onUploadLogoImage}
                        >
                          Upload
                        </button>
                        <button
                          className="btn btn-primary"
                          onClick={onCancelUploadLogoImage}
                        >
                          <strong>&times;</strong>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Shop form fields */}
          <hr/>
          <form onSubmit={onSubmit}>
            <div className="container">
              <h3 className="title">Shop Information</h3>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="markets">Market</label>
                    <select name="markets" value={marketId} onChange={(e) => setMarketId(e.target.value)} className="form-control">
                      <option value="">Select Market</option>
                      {markets.map((market) => (
                        <option key={market.id} value={market.id}>
                          {market.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="shop_name">Business Name</label>
                    <input
                      type="text"
                      name="shop_name"
                      value={shopName}
                      className="form-control"
                      onChange={(e) => setShopName(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="form-group">
                    <label htmlFor="shop_address">Address</label>
                    <textarea
                      name="shop_address"
                      value={shopAddress}
                      className="form-control"
                      onChange={(e) => setShopAddress(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="shop_name">Email Address</label>
                    <input
                      type="text"
                      name="shop_name"
                      className="form-control"
                      value={shopEmail}
                      onChange={(e) => setShopEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="shop_name">Phone Number</label>
                    <input
                      type="text"
                      name="shop_name"
                      className="form-control"
                      value={shopPhone}
                      onChange={(e) => setShopPhone(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="shop_name">Facebook</label>
                    <input
                      type="text"
                      name="shop_name"
                      value={facebookHandle}
                      className="form-control"
                      onChange={(e) => setFacebookHandle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="shop_name">Twitter</label>
                    <input
                      type="text"
                      name="shop_name"
                      value={twitterHandle}
                      className="form-control"
                      onChange={(e) => setTwitterHandle(e.target.value)}
                    />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="shop_name">Instagram</label>
                    <input
                      type="text"
                      name="shop_name"
                      value={instagramHandle}
                      className="form-control"
                      onChange={(e) => setInstagramHandle(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-12">
                  <div className="d-flex justify-content-end">
                    <button className="btn btn-danger">Save Changes</button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
