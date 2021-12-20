import React from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import '../styles/Nav.css';
import { styled } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CssSelect = styled(Select)({
  '& .MuiInputBase-input': {
    color: '#6A747D',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiSvgIcon-root': {
    fill: '#6A747D',
  },
})

function Nav({ type = 0 }) {

  const navigate = useNavigate();

  const [spokenLang, setSpokenLang] = React.useState('');
  const [lang, setLang] = React.useState('');
  const [range, setRange] = React.useState('');

  return (
    <div className="Nav">
      <ButtonGroup variant="contained">
        <Button onClick={() => navigate("/repositories")} style={type === 1 ? { backgroundColor: 'transparent' } : {}}>Repositories</Button>
        <Button onClick={() => navigate("/developers")} style={type === 0 ? { backgroundColor: 'transparent' } : {}}>Developers</Button>
      </ButtonGroup>
      <div className="Select_panel">
        {type === 0 && <p>Spoken Language</p>}
        {type === 0 &&
          <CssSelect
            value={spokenLang}
            onChange={(e) => setSpokenLang(typeof e.target.value === 'string' ? e.target.value : '')}
            displayEmpty
          >
            <MenuItem value="">
              <em>Any</em>
            </MenuItem>
            <MenuItem value={"en"}>English</MenuItem>
            <MenuItem value={"fr"}>French</MenuItem>
            <MenuItem value={"de"}>German</MenuItem>
          </CssSelect>
        }
        <p>Language</p>
        <CssSelect
          value={lang}
          onChange={(e) => setLang(typeof e.target.value === 'string' ? e.target.value : '')}
          displayEmpty
        >
          <MenuItem value="">
            <em>Any</em>
          </MenuItem>
          <MenuItem value={"en"}>English</MenuItem>
          <MenuItem value={"fr"}>French</MenuItem>
          <MenuItem value={"de"}>German</MenuItem>
        </CssSelect>
        <p>Date range</p>
        <CssSelect
          value={range}
          onChange={(e) => setRange(typeof e.target.value === 'string' ? e.target.value : '')}
          displayEmpty
        >
          <MenuItem value="">
            <em>Today</em>
          </MenuItem>
          <MenuItem value={"week"}>Last week</MenuItem>
          <MenuItem value={"month"}>Last month</MenuItem>
          <MenuItem value={"year"}>Last year</MenuItem>
        </CssSelect>
      </div>
    </div>
  );
}

export default Nav;
