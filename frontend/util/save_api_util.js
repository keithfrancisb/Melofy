
export const save = (saveId, saveType) => {
  return $.ajax({
    method: 'post',
    url: 'api/saves',
    data: {
      saveable_id: saveId,
      saveable_type: saveType
    }
  });
};

export const unsave = saveId => {
  return $.ajax({
    method: 'delete',
    url: `api/saves/${saveId}`,
  });
};
