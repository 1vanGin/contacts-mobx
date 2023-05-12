import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ContactDto } from "src/types/dto/ContactDto";
import { ContactCard } from "src/components/ContactCard";
import { Empty } from "src/components/Empty";
import { contactsStore } from "src/store/contactsStore";

export const ContactPage = () => {
  const allContacts = contactsStore.contacts;
  const { contactId } = useParams<{ contactId: ContactDto["id"] }>();
  const [contact, setContact] = useState<ContactDto>();

  useEffect(() => {
    setContact(() => allContacts.find(({ id }) => id === contactId));
  }, [allContacts, contactId]);

  return (
    <Row xxl={3}>
      <Col className={"mx-auto"}>
        {contact ? <ContactCard contact={contact} /> : <Empty />}
      </Col>
    </Row>
  );
};
