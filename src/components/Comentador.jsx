import React, { useEffect, useState } from "react";
import { Avatar, Button, Comment, Form, Input, List, Tooltip } from "antd";
import moment from "moment";
import { v4 as uuid } from "uuid";
import { URL } from "../utils/url";
const { TextArea } = Input;

const CommentList = ({ comments }) => {
  useEffect(() => {
    if (!comments?.length) return;

    comments.forEach((comment) => {
      const paginaDiv = document.getElementById(`pagina-${comment.id}`);
      paginaDiv.innerHTML = comment.pagina;
    });
  }, [comments]);

  const renderActions = ({ id }) => {
    const actions = [
      <Tooltip key="comment-social">
        <div id={`pagina-${id}`}></div>
      </Tooltip>,
    ];
    return actions;
  };

  return (
    <List
      dataSource={comments}
      header={`${comments.length} ${comments.length > 1 ? "replies" : "reply"}`}
      itemLayout="horizontal"
      renderItem={(props) => {
        return <Comment {...props} actions={renderActions(props)} />;
      }}
    />
  );
};

const Editor = ({ comments, setComments }) => {
  const [value, setValue] = useState("");
  const [username, setUsername] = useState("");
  const [pagina, setPagina] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleComentar = () => {
    if (!value || !username || !pagina) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      fetch(`${URL}/hacerComentario?usuarioId=1&comentario=${value}&social=${pagina}&nombre=${username}`, {
        method: "GET",
        mode: "cors",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          const comentarios = [
            ...comments,
            {
              id: uuid(),
              author: username,
              avatar: "https://joeschmoe.io/api/v1/random",
              pagina: pagina,
              content: value,
              datetime: moment().fromNow(),
            },
          ];
          setComments(comentarios);
          setValue("");
          setUsername("");
          setPagina("");

          console.log("🚀 ~ data", data);
        });
    }, 1000);
  };

  return (
    <>
      <Form.Item>
        <TextArea rows={4} onChange={(e) => setValue(e.target.value)} value={value} />
      </Form.Item>
      <div style={{ display: "flex", gap: "2%" }}>
        <Form.Item>
          <Input placeholder="Nombre de Usuario" onChange={(e) => setUsername(e.target.value)} value={username} />
        </Form.Item>
        <Form.Item>
          <Input placeholder="Web o red social" onChange={(e) => setPagina(e.target.value)} value={pagina} />
        </Form.Item>
      </div>
      <Form.Item>
        <Button htmlType="submit" loading={submitting} onClick={handleComentar} type="primary">
          Comentar
        </Button>
      </Form.Item>
    </>
  );
};

const Comentador = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`${URL}/usuarios/comentarios?usuarioId=1`, {
      method: "GET",
      mode: "cors",
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        const mappedComments = data?.rows?.map((r) => {
          return {
            id: r.usuario_id,
            author: r.nombrecomentario,
            avatar: "https://joeschmoe.io/api/v1/random",
            pagina: r.redsocial,
            content: r.comentario,
            datetime: moment().fromNow(),
          };
        });
        console.log("🚀 ~ mappedComments", mappedComments);
        setComments(mappedComments || []);
      });
  }, []);

  return (
    <>
      {comments.length > 0 && <CommentList comments={comments} />}
      <Comment
        avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
        content={<Editor setComments={setComments} comments={comments} />}
      />
    </>
  );
};

export default Comentador;
