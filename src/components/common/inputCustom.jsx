import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDebounce } from 'use-lodash-debounce';

import http from '../../services/httpService';

import Icon from './icon';
import Input from './input';

function InputCustom({
  selectedId,
  retrievalEndpoint,
  searchEndpoint,
  displayNameField,
  label,
  handleChange,
  handleClear,
  disableClear,
  link,
}) {
  const [selectedObject, setSelectedObject] = useState(null);
  const [searchString, setSearchString] = useState('');
  const searchStringDebounced = useDebounce(searchString, 500);
  const [results, setResults] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getSelectedObject = async () => {
      const response = await http.get(`${retrievalEndpoint}${selectedId}`);
      setSelectedObject(response.data);
    };

    if (selectedId) {
      getSelectedObject();
    } else {
      setSelectedObject(null);
      setResults([]);
    }
  }, [retrievalEndpoint, selectedId]);

  useEffect(() => {
    setIsLoading(true);

    const getSearchResults = async () => {
      const response = await http.get(`${searchEndpoint}search_string=${searchStringDebounced}`);
      setResults(response.data);
      setIsLoading(false);
    };

    if (searchStringDebounced) {
      getSearchResults();
    }
  }, [searchEndpoint, searchStringDebounced]);

  return (
    <div style={{ position: 'relative' }}>
      <div className="d-flex input-width">
        {!(link && selectedObject) && (
          <Input
            name={label}
            value={selectedObject ? selectedObject[displayNameField] : searchString}
            label={label}
            onChange={setSearchString}
            disabled={selectedObject}
          />
        )}
        {link && selectedObject && (
          <Link to={link}>
            <Input
              name={label}
              value={selectedObject ? selectedObject[displayNameField] : searchString}
              label={label}
              onChange={setSearchString}
              clickable={true}
            />
          </Link>
        )}
        {!disableClear && selectedObject && (
          <div
            className="align-self-center ms-2 mb-3"
            onClick={() => {
              setSelectedObject(null);
              setSearchString('');
              handleClear();
            }}
          >
            <Icon name="close" tooltipText="Clear" />
          </div>
        )}
      </div>
      {results.length > 0 && searchString && (
        <React.Fragment>
          <div
            className="w-100 h-100"
            style={{ position: 'fixed', top: 0, left: 0 }}
            onClick={() => {
              setSearchString('');
              setResults([]);
            }}
          />
          <div
            className="background-white p-3 input-width"
            style={{
              maxHeight: '600px',
              overflow: 'scroll',
              position: 'absolute',
              top: '55px',
              zIndex: '3',
            }}
          >
            {isLoading && <Icon name="fa fa-circle-notch fa-spin" />}
            {!isLoading &&
              results.map((t, i) => (
                <p
                  key={i}
                  className="sura pointer mb-2"
                  onClick={() => {
                    setSelectedObject(t);
                    setSearchString('');
                    setResults([]);
                    handleChange(t);
                  }}
                >
                  {t[displayNameField]}
                </p>
              ))}
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default InputCustom;
