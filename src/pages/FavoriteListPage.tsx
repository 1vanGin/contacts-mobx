import React from "react";
import { Col, Row } from "react-bootstrap";
import { ContactCard } from "src/components/ContactCard";
import { ContactDto } from "src/types/dto/ContactDto";
import { contactsStore } from "src/store/contactsStore";
import { favoriteStore } from "src/store/favoriteStore";
import { observer } from "mobx-react-lite";

export const FavoriteListPage = observer(() => {
  const allContacts = contactsStore.contacts;
  const allFavorites = favoriteStore.favorite;
  const contacts: ContactDto[] = allContacts.filter(({ id }) =>
    allFavorites.includes(id)
  );

  if (contacts.length === 0) {
    return <h3>No favorites</h3>;
  }

  return (
    <Row xxl={4} className="g-4">
      {contacts.map((contact) => (
        <Col key={contact.id}>
          <ContactCard contact={contact} withLink />
        </Col>
      ))}
    </Row>
  );
});
