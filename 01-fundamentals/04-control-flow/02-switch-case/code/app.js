// Switch..case

// Declare the role of the current user
let userRole;

// Identify the role (guest, moderator, admin)
switch (userRole) {
  case "guest":
    console.log("Guest User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  case "admin":
    console.log("Admin User");
    break;

  default:
    console.log("Unknown Role");
    break;
}

// if..else implementation
if (userRole === "guest") console.log("Guest User");
else if (userRole === "moderator") console.log("Moderator User");
else if (userRole === "admin") console.log("Admin User");
else console.log("Unknown Role");
