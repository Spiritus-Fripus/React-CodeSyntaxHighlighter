import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus as vscDarkPlusTheme } from "react-syntax-highlighter/dist/cjs/styles/prism";
import DeleteItem from "../ButtonItems/DeleteItem";
import CopyToClipboard from "../ButtonItems/CopyToClipboard";
import ExportAsFile from "../ButtonItems/ExportAsFile";
import ExportAsImage from "../ButtonItems/ExportAsImage";

function ItemList({ items, offset, captureRefs }) {
  return (
    <div>
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={item.id} className="card mb-3">
            <div className="card-body">
              <h2 className="card-title">{item.title}</h2>
              <div
                ref={(el) => (captureRefs.current[offset + index] = el)}
                className="mb-3"
              >
                <SyntaxHighlighter
                  language={item.language}
                  style={vscDarkPlusTheme}
                  wrapLines={true}
                  customStyle={{ fontSize: "14px", lineHeight: "1.5" }}
                >
                  {item.code}
                </SyntaxHighlighter>
              </div>
              <div className="d-flex justify-content-between">
                <DeleteItem itemId={item.id} />
                <CopyToClipboard data={item} />
                <ExportAsImage
                  captureRefs={captureRefs}
                  index={offset + index}
                  item={item}
                />
                <ExportAsFile
                  captureRefs={captureRefs}
                  index={offset + index}
                  item={item}
                />
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>Aucun élément trouvé.</div>
      )}
    </div>
  );
}

export default ItemList;
