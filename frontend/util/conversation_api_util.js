export const fetchAllConversations = () => (
  $.ajax({
    method: 'GET',
    url: `/api/conversations`
  })
);

export const fetchConversation = (id) => (
  $.ajax({
    method: 'GET',
    url: `/api/conversations/${id}`
  })
);

export const createConversation = (conversation) => (
  $.ajax({
    method: 'POST',
    url: `/api/conversations`,
    data: { conversation }
  })
);
