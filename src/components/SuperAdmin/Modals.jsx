import React from 'react';

export default function Modals(){
  // We'll keep content populated by functions in each route using DOM helpers
  // or by React state in future iterations. For now, keep the basic modal structure.
  return (
    <>
      <div id="historyModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title"><i className="fa-solid fa-clock-rotate-left"></i> History</div>
            <button className="modal-close" onClick={() => closeModal('historyModal')}>&times;</button>
          </div>
          <div id="historyModalBody" className="modal-body"></div>
        </div>
      </div>

      <div id="detailsModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div id="detailsModalTitle" className="modal-title"><i className="fa-solid fa-info-circle"></i> Details</div>
            <button className="modal-close" onClick={() => closeModal('detailsModal')}>&times;</button>
          </div>
          <div id="detailsModalBody" className="modal-body"></div>
        </div>
      </div>

      <div id="addDriverModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <h2 className="modal-title"><i className="fa-solid fa-user-plus"></i> Add New Driver</h2>
            <button className="modal-close" onClick={() => closeModal('addDriverModal')}>&times;</button>
          </div>
          <div className="modal-body">
            <form id="addDriverForm">
              <div className="form-row">
                <div className="form-group">
                  <label className="form-label">First Name *</label>
                  <input type="text" className="form-input" required placeholder="Enter first name"/>
                </div>
                <div className="form-group">
                  <label className="form-label">Last Name *</label>
                  <input type="text" className="form-input" required placeholder="Enter last name"/>
                </div>
              </div>
              <div style={{display:'flex', gap:'0.5rem', marginTop:'.5rem'}}>
                <button type="button" className="btn btn-primary" onClick={() => alert('Driver added (demo)')}>Add Driver</button>
                <button type="button" className="btn btn-secondary" onClick={() => closeModal('addDriverModal')}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* helper scripts */}
      <style>{`
        .modal { display:none; position:fixed; z-index:1000; left:0; top:0; width:100%; height:100%; background: rgba(0,0,0,0.7); overflow-y:auto; }
        .modal.show { display:flex; align-items:center; justify-content:center; padding:2rem; }
        .modal-content { background:#fff; border-radius:16px; width:100%; max-width:900px; max-height:90vh; overflow-y:auto; }
        .modal-header { background: linear-gradient(135deg,#1a1b2e 0%,#2b2d42 100%); color:#fff; padding:1rem 1.5rem; display:flex; justify-content:space-between; align-items:center; border-radius:16px 16px 0 0; }
        .modal-body{ padding:1.25rem; }
        .modal-close{ background: rgba(255,255,255,0.1); border:none; color:#fff; font-size:1.25rem; width:38px; height:38px; border-radius:50%; }
      `}</style>
    </>
  );
}

/* helper to close modal from anywhere (kept global for parity with original) */
function closeModal(id){
  const el = document.getElementById(id);
  if(el) el.classList.remove('show');
}
window.showModal = (id) => {
  const el = document.getElementById(id);
  if(el) el.classList.add('show');
};
window.closeModal = closeModal;










