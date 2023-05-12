import React, { memo } from "react";
import { Col, Row } from "react-bootstrap";
import { GroupContactsCard } from "src/components/GroupContactsCard";
import { groupsStore } from "src/store/groupsStore";

export const GroupListPage = memo(() => {
  const allGroups = groupsStore.groups;
  return (
    <Row xxl={4}>
      {allGroups.map((groupContacts) => (
        <Col key={groupContacts.id} className="mb-3">
          <GroupContactsCard groupContacts={groupContacts} withLink />
        </Col>
      ))}
    </Row>
  );
});
