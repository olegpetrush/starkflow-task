import React from 'react';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import { styled } from '@mui/material';
import { FaRegStar, FaRegHeart } from 'react-icons/fa';
import { GoRepoForked } from 'react-icons/go';
import { VscRepo } from 'react-icons/vsc';
import { RiFireLine } from 'react-icons/ri';
import { repositories, developers } from '../db.js';
import '../styles/Board.css';
import { IRepository, IDeveloper } from '../types';

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

const Repository = (props: IRepository) => {
  const { repositoryName, description, language, totalStars, forks, builtBy, starsSince } = props;

  return (
    <div className="repo">
      <div className="left_repo">
        <p>
          <VscRepo />
          {repositoryName}
        </p>
        <p>{description}</p>
        <div>
          {language && <p>{language}</p>}
          <p>
            <FaRegStar />
            {totalStars.toLocaleString()}
          </p>
          <p>
            <GoRepoForked />
            {forks.toLocaleString()}
          </p>
          <div>
            {builtBy.map((user, index) => (
              <img src={user.avatar} alt="" key={index} />
            ))}
          </div>
        </div>
      </div>
      <div className="right_repo">
        <Button><FaRegStar/> Star</Button>
        <p><FaRegStar /> {starsSince.toLocaleString()} stars today</p>
      </div>
    </div>
  )
}

const Developer = (props: IDeveloper) => {
  const { rank, username, name, avatar, popularRepository } = props;

  return (
    <div className="dev">
      <div>
        <span>{rank}</span>
        <img src={avatar} alt="" />
        <div>
          <h3>{name}</h3>
          <p>{username}</p>
        </div>
      </div>
      <div>
        <p><RiFireLine />POPULAR REPO</p>
        { popularRepository.repositoryName && <p><VscRepo />{ popularRepository.repositoryName }</p> }
        { popularRepository.description && <p>{ popularRepository.description }</p> }
      </div>
      <div>
        <Button><FaRegHeart />Sponsor</Button>
        <Button>Follow</Button>
      </div>
    </div>
  )
}

function Board({ type = 0 }) {

  return (
    <div className="board">
      { type === 0 && repositories.map((repo, index) => (
        <Repository
          key={index}
          {...repo}
        />
      ))}
      { type === 1 && developers.map((dev, index) => (
        <Developer 
          key={index}
          {...dev}
        />
      ))}
    </div>
  );
}

export default Board;
