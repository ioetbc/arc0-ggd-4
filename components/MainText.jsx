import React from "react";
import styled from "styled-components";

const HIS = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 48px;
  margin: 2em;
`;

export const MainText = ({ leftText, rightText }) => {
  return (
    <HIS>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis error
          non pariatur sit placeat enim, tempore fugiat debitis necessitatibus,
          voluptatem, magnam nostrum ad molestias dicta accusamus quidem
          consequatur doloremque iure!
        </p>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
          laboriosam saepe itaque rerum blanditiis veritatis corporis architecto
          nulla quisquam ex, fuga ipsa! Cum, quaerat laudantium corrupti
          expedita asperiores mollitia minus?
        </p>
      </div>
    </HIS>
  );
};
