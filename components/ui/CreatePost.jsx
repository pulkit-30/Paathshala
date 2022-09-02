import React, { useState, useContext } from "react";
import Card from "../utils/Card";
import { Avatar, IconButton, Button, TextField, Box } from "@mui/material";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import Image from "next/image";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import Autocomplete from "@mui/material/Autocomplete";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import styles from "../../styles/feed.module.css";
import axios from "axios";
import { useSession } from "next-auth/react";
import MessageContext from "../../context/messages/MessageContext";

const CreatePost = ({ tags }) => {
  const { data: session } = useSession();
  const Message = useContext(MessageContext);
  const [content, setContent] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [imgSelected, setImgSelected] = useState(null);
  const [addTag, setAddTags] = useState([]);
  const [imgUrl, setImgUrl] = useState("");

  const textChange = (data) => {
    data = data.trim();
    if (data) {
      setDisabled(false);
    } else setDisabled(true);
    setContent(data);
  };

  const tagsChange = (event, tag) => {
    console.log(tag);
    setAddTags(tag);
  };

  const imageUpload = (image) => {
    const data = new FormData();
    var img = image;
    //Upload image to cloudinary, in response you will get url of image
    data.append("file", img);
    data.append("upload_preset", "paathshaala");
    data.append("cloud_name", "digf8dtoq");

    var config = {
      method: "post",
      url: "https://api.cloudinary.com/v1_1/digf8dtoq/image/upload",
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(response.data["url"]);
        setImgUrl(response.data["url"]);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  // Post data to backend

  const handelPost = (e) => {
    imgSelected && imageUpload(imgSelected);

    const payload = {
      content,
      authorEmail: session.user.email,
      image: imgUrl,
    };

    console.log("posting payload--->", payload);

    // sending backend request
    axios
      .post("/api/post", payload)
      .then((res) => console.log(res))
      .catch((err) => Message.ThrowMessage(err.message));
  };

  return (
    <Card className="flex">
      <Box
        sx={{
          width: 800,
          maxWidth: "100%",
          display: "flex",
          alignItems: "flex-end",
          paddingBlock: 1,
        }}
      >
        <Avatar sx={{ mr: 1, my: 0.5 }} />

        <TextField
          fullWidth
          multiline
          id="fullWidth"
          placeholder={tags ? "Ask your doubt" : "Create a Post.."}
          variant="standard"
          minRows={1.5}
          inputProps={{
            style: { color: "var(--font-color)", fontSize: "1.15rem" },
          }}
          value={content}
          onChange={(e) => textChange(e.target.value)}
        />
      </Box>

      {tags && (
        <Box
          sx={{
            width: 800,
            maxWidth: "100%",
            display: "flex",
            alignItems: "flex-end",
            paddingBlock: 1,
          }}
        >
          <LocalOfferIcon sx={{ ml: 1, mr: 2, my: 0.5 }} />
          <Autocomplete
            multiple
            fullWidth
            freeSolo
            id="tags-standard"
            options={doubtTags}
            getOptionLabel={(option) => option.title}
            limitTags={2}
            onChange={(event, value) => tagsChange(event, value)}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                placeholder="select your tags"
              />
            )}
          />
        </Box>
      )}

      {imgSelected && (
        <div className={`${styles.card_section} ${styles.image_section}`}>
          <Image
            src={URL.createObjectURL(imgSelected)}
            alt="post-image"
            layout="fill"
          />

          <IconButton
            size="small"
            onClick={() => setImgSelected(null)}
            style={{
              position: "absolute",
              background: "rgba(0,0,0,0.5)",
              color: "white",
              top: "2px",
              right: "1px",
            }}
          >
            <CloseOutlinedIcon fontSize="small" />
          </IconButton>
        </div>
      )}

      <div
        style={{ width: "100%", paddingBlock: 10 }}
        className="flex f-space-btw"
      >
        <IconButton component="label">
          <input
            hidden
            accept="image/*"
            type="file"
            onChange={(e) => setImgSelected(e.target.files[0])}
            onClick={(e) => {
              e.target.value = null;
            }}
          />
          <AddPhotoAlternateOutlinedIcon
            style={{ color: "var(--primary-color)" }}
          />
        </IconButton>

        <Button
          onClick={handelPost}
          disabled={disabled}
          sx={{ borderRadius: 8 }}
          variant="contained"
        >
          Post
        </Button>
      </div>
    </Card>
  );
};

const doubtTags = [
  { title: "Coding" },
  { title: "Web Dev" },
  { title: "App Dev" },
  { title: "College Stuff" },
  { title: "Frontend" },
  { title: "Backend" },
  { title: "Graphic" },
  { title: "Competitive Programming" },
  { title: "Freelancing" },
];

export default CreatePost;
