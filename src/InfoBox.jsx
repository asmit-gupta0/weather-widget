import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import SunnyIcon from "@mui/icons-material/Sunny";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";

export default function InfoBox({ info }) {
  const HOT =
    "https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD =
    "https://images.unsplash.com/photo-1612119276551-be9efb8ea36a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  const RAIN =
    "https://plus.unsplash.com/premium_photo-1666717576644-5701d3406840?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cmFpbnklMjB3ZWF0aGVyfGVufDB8fDB8fHww";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: 400, height: 500, marginTop: "3rem" }}>
        <CardMedia
          sx={{ height: 200 }}
          image={info.humidity > 80 ? RAIN : info.temp > 15 ? HOT : COLD}
          title="weather image"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}{" "}
            {info.humidity > 80 ? (
              <ThunderstormIcon />
            ) : info.temp > 15 ? (
              <SunnyIcon />
            ) : (
              <AcUnitIcon />
            )}
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "text.secondary" }}
            component="span"
            style={{ fontSize: "1rem", color: "black" }}
          >
            <p
              style={{
                fontSize: "2.5rem",
                color: "black",
                margin: "0",
              }}
            >
              {info.temp}&deg;C
            </p>
            <p>
              <i style={{ fontSize: "1.2rem", color: "black" }}>
                {info.weather}
              </i>
            </p>
            <p>
              {info.temp_max}&deg;C/{info.temp_min}&deg;C
            </p>
            <p>Feels like {info.feels_like}&deg;C</p>
            <p>Humidity {info.humidity}%</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
