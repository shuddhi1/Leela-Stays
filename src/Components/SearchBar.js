import React, { useState } from "react";
import "./SearchBar.css";

// Detect if device is iOS (kept for future if needed for other tweaks)
const isIOS = () => {
  return (
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent) &&
    !window.MSStream
  );
};

// Floating label input for date selection
const DateInput = ({ id, value, setValue, label }) => {
  return (
    <div className="floating-label-input">
      <input
        id={id}
        type="date"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <label htmlFor={id} className={value ? "filled" : ""}>
        {label}
      </label>
    </div>
  );
};

const SearchBar = () => {
  const [name, setName] = useState("");
  const [arrivalDate, setArrivalDate] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [showGuestPicker, setShowGuestPicker] = useState(false);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [pets, setPets] = useState("No");

  const isIOSDevice = isIOS();

  const handleGuestPickerToggle = () => {
    setShowGuestPicker(!showGuestPicker);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log({
      name,
      arrivalDate,
      departureDate,
      guests: { adults, children, pets },
    });
  };

  const handleInquiry = () => {
    const customerName = document.getElementById("customerName").value;
    const members = document.getElementById("members").value;
    const arrdate = document.getElementById("arrdate").value;
    const depdate = document.getElementById("depdate").value;

    const message = `Hello Leela Stays! I am ${customerName}. I want to book a room on ${arrdate} to ${depdate}. We are ${members} members (Pets: ${pets})`;
    const encodedMessage = encodeURIComponent(message);

    customerName && members && arrdate && depdate
      ? window.open(`https://wa.me/917906734034?text=${encodedMessage}`, "_blank")
      : alert("Please enter all the information");
  };

  return (
    <div className="searchwrapper">
      <div className="search-bar">
        <h2>Discover Unparalleled Serenity at LeelaStays</h2>
        <form className="search-form" onSubmit={handleSearch}>
          
          {/* Booking Name */}
          <div className="form-group">
            <input
              id="customerName"
              type="text"
              placeholder="Booking Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Arrival Date */}
          <DateInput
            id="arrdate"
            value={arrivalDate}
            setValue={setArrivalDate}
            label="Arrival Date"
          />

          {/* Departure Date */}
          <DateInput
            id="depdate"
            value={departureDate}
            setValue={setDepartureDate}
            label="Departure Date"
          />

          {/* Guest Picker */}
          <div className="form-group guests">
            <input
              id="members"
              type="text"
              placeholder="Guests"
              value={adults + children}
              readOnly
              onClick={handleGuestPickerToggle}
            />
            {showGuestPicker && (
              <div className="guest-picker">
                <div className="guest-row">
                  <span>Adults</span>
                  <button
                    type="button"
                    onClick={() => setAdults(Math.max(0, adults - 1))}
                  >
                    -
                  </button>
                  <span>{adults}</span>
                  <button type="button" onClick={() => setAdults(adults + 1)}>
                    +
                  </button>
                </div>

                <div className="guest-row">
                  <span>Children</span>
                  <button
                    type="button"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                  >
                    -
                  </button>
                  <span>{children}</span>
                  <button type="button" onClick={() => setChildren(children + 1)}>
                    +
                  </button>
                </div>

                <div className="guest-row pets">
                  <span>Pets</span>
                  <label>
                    <input
                      type="radio"
                      value="Yes"
                      checked={pets === "Yes"}
                      onChange={() => setPets("Yes")}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      value="No"
                      checked={pets === "No"}
                      onChange={() => setPets("No")}
                    />
                    No
                  </label>
                </div>

                <button
                  className="apply-button"
                  type="button"
                  onClick={handleGuestPickerToggle}
                >
                  Apply
                </button>
              </div>
            )}
          </div>

          {/* Submit / WhatsApp Inquiry */}
          <div className="form-group">
            <button
              type="submit"
              className="search-button"
              onClick={handleInquiry}
            >
              Inquire
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default SearchBar;
