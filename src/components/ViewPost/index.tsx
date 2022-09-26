/* eslint-disable camelcase */
import React, { useState } from 'react';
import ImgRound from '../ImgRound';
import {
  CreatedAt,
  LikeBtn,
  LikeImg,
  LikeText,
  PostContainer, TextContainer, UserContainer, UserInfo, UserName,
} from './styles';
import { PiuInterface } from '../../interfaces';
import formatDate from '../../utils/formatDate';
import heart from '../../assets/Heart.png';
import heartFilled from '../../assets/Heart_Fill.png';
import api from '../../services/api';
import { useAuth } from '../../hooks/useAuth';

const ViewPost: React.FC<PiuInterface> = ({
  user, text, created_at, likes, id,
}) => {
  const { user: myUser } = useAuth();
  const [LikeCount, setLikeCount] = useState(likes.length || 0);
  const [IsLiked, setIsLiked] = useState(likes.some((e) => e.user.id === myUser?.id));

  const handleLike = async () => {
    setIsLiked(!IsLiked);
    setLikeCount(IsLiked ? LikeCount - 1 : LikeCount + 1);
    await api.post('/pius/like', { piu_id: id });
  };

  return (
    <PostContainer>
      <UserContainer>
        <ImgRound source={{ uri: user.photo }} size="48px" />
        <UserInfo>
          <UserName>
            {`@${user.username}`}
          </UserName>
          <CreatedAt>
            {formatDate(created_at)}
          </CreatedAt>
        </UserInfo>
        <LikeBtn onPress={handleLike}>
          <LikeImg source={IsLiked ? heartFilled : heart} />
        </LikeBtn>
        {!!LikeCount && <LikeText>{LikeCount}</LikeText> }
      </UserContainer>
      <TextContainer>
        {text}
      </TextContainer>
    </PostContainer>
  );
};

export default ViewPost;
