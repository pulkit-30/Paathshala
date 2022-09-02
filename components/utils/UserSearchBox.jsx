import React from 'react';
import { IconButton, Box, InputAdornment} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import Autocomplete, { createFilterOptions } from '@mui/material/Autocomplete';

const OPTIONS_LIMIT = 5;
const defaultFilterOptions = createFilterOptions();
const filterOptions = (options, state) => {
    return defaultFilterOptions(options, state).slice(0, OPTIONS_LIMIT);
  };

const UserSearchBox = () => {
    const [value, setValue] = React.useState(null);

    return (
      <Box sx={{width:'100%', borderRadius:'50px',  backgroundColor:'#7f7f7f49', my:2}  }> 
        <Autocomplete
        fullWidth
        filterOptions={filterOptions}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={allusers.map((option) => option.username)}
        sx={{}}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search or start a new chat"
            InputProps={{
              ...params.InputProps,
              type: 'search',
              style: { color: "var(--font-color)", fontSize: "1rem" },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon sx={{color:"var(--font-color)"}}/>
                </InputAdornment>
              ),
            }}
            sx={{
              "& .MuiOutlinedInput-root": {
                "& > fieldset": {
                  border: "none"
                }
              },
              color:'var(--font-color)'
            }}
          />
        )}
      />
      </Box>
    );
};


export default UserSearchBox;

const allusers = [
    { username: 'Pulkit Gupta', id: 1 },
    { username: 'Raj Chauhan', id: 2 },
    { username: 'Prerna Sharma', id: 3 },
    { username: 'Mustafa Khan', id: 4 },
   
  ];

